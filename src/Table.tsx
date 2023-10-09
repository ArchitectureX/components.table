import React, { FC, useState } from 'react'

import { styles } from './styles'

interface TableProps {
  headers: string[]
  rows: string[][]
  hoverHighlight?: boolean
  headerBgColor?: string
  rowColor?: string
  altRowColor?: string
  onRowClick?: (rowData: string[], rowIndex: number) => void
  striped?: boolean
  columnAlignments?: ('left' | 'center' | 'right')[]
  rowsPerPage?: number
}

const defaultColors = {
  headerBgColor: styles.headerBgColor,
  rowColor: styles.rowColor,
  altRowColor: styles.altRowColor
}

const alignmentClasses = {
  left: styles.left,
  center: styles.center,
  right: styles.right
}

const Table: FC<TableProps> = ({
  headers,
  rows: initialRows,
  hoverHighlight = false,
  headerBgColor = defaultColors.headerBgColor,
  rowColor = defaultColors.rowColor,
  altRowColor = defaultColors.altRowColor,
  onRowClick,
  striped = true,
  columnAlignments = [],
  rowsPerPage = 10
}) => {
  const [sortedRows, setSortedRows] = useState(initialRows)
  const [sortConfig, setSortConfig] = useState<{ key: number; direction: 'asc' | 'desc' } | null>(
    null
  )
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(sortedRows.length / rowsPerPage)

  // Sorting function
  const onHeaderClick = (colIndex: number) => {
    let direction: 'asc' | 'desc' = 'asc'

    if (sortConfig && sortConfig.key === colIndex && sortConfig.direction === 'asc') {
      direction = 'desc'
    }

    const sorted = [...sortedRows].sort((a, b) => {
      if (a[colIndex] < b[colIndex]) return direction === 'asc' ? -1 : 1
      if (a[colIndex] > b[colIndex]) return direction === 'asc' ? 1 : -1
      return 0
    })

    setSortedRows(sorted)
    setSortConfig({ key: colIndex, direction })
  }

  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentRows = sortedRows.slice(startIndex, endIndex)

  return (
    <div>
      <div className={styles.responsive}>
        <table className={styles.table}>
          <thead>
            <tr className={headerBgColor}>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`${styles.headerRow} ${
                    alignmentClasses[columnAlignments[idx] || 'left']
                  }`}
                  onClick={() => onHeaderClick(idx)}
                >
                  {header}
                  {sortConfig &&
                    sortConfig.key === idx &&
                    (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${striped && rowIndex % 2 === 0 ? altRowColor : rowColor} ${
                  hoverHighlight ? styles.rowHover : ''
                } cursor-pointer`}
                onClick={() => onRowClick && onRowClick(row, rowIndex)}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`${styles.bodyRow} ${
                      alignmentClasses[columnAlignments[cellIndex] || 'left']
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedRows.length > rowsPerPage && (
        <div className={styles.pagination}>
          <span className={styles.entries}>
            Showing {startIndex + 1} to {Math.min(endIndex, sortedRows.length)} of{' '}
            {sortedRows.length} entries
          </span>
          <div>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.previous}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={styles.next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table
