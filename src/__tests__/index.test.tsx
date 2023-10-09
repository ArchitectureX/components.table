/**
 * @jest-environment jsdom
 */
import { jest, describe, expect, it } from '@jest/globals'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'

import EnhancedTableComponent from '../Table'

describe('EnhancedTableComponent', () => {
  const headers = ['Name', 'Age', 'Email']
  const rows = [
    ['John Doe', '28', 'john@example.com'],
    ['Jane Smith', '34', 'jane@example.com'],
    ['Alice', '25', 'alice@example.com']
  ]

  it('renders table headers and rows', () => {
    const { getByText } = render(<EnhancedTableComponent headers={headers} rows={rows} />)

    headers.forEach((header) => {
      expect(getByText(header)).toBeInTheDocument()
    })

    rows.forEach((row) => {
      row.forEach((cell) => {
        expect(getByText(cell)).toBeInTheDocument()
      })
    })
  })

  it('invokes onRowClick when a row is clicked', () => {
    const onRowClickMock = jest.fn()
    const { getByText } = render(
      <EnhancedTableComponent headers={headers} rows={rows} onRowClick={onRowClickMock} />
    )

    fireEvent.click(getByText('John Doe'))

    expect(onRowClickMock).toHaveBeenCalledTimes(1)
  })

  it('shows pagination controls when number of rows exceeds rowsPerPage', () => {
    const { queryByText } = render(
      <EnhancedTableComponent headers={headers} rows={rows} rowsPerPage={2} />
    )

    expect(queryByText('Next')).toBeInTheDocument()
  })

  it('does not show pagination controls when number of rows is less than or equal to rowsPerPage', () => {
    const { queryByText } = render(
      <EnhancedTableComponent headers={headers} rows={rows} rowsPerPage={10} />
    )

    expect(queryByText('Next')).not.toBeInTheDocument()
  })
})
