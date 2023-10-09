import cx from '@architecturex/utils.cx'

interface StylesMapping {
  [key: string]: string
}

export const styles: StylesMapping = {
  responsive: 'overflow-x-auto',
  table: 'min-w-full',
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  headerBgColor: 'bg-gray-50',
  rowColor: 'bg-white',
  altRowColor: 'bg-gray-100',
  headerRow:
    'py-2 px-4 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer',
  rowHover: 'hover:bg-gray-200',
  bodyRow: 'py-2 px-4 border-b border-gray-200',
  pagination: 'mt-4 flex justify-between items-center',
  entries: 'text-xs text-gray-600',
  previous: 'px-3 py-1 text-sm border rounded-l hover:bg-gray-200',
  next: 'px-3 py-1 text-sm border-t border-b border-r rounded-r hover:bg-gray-200'
}

export const tailwindClasses = cx.extract(styles)
