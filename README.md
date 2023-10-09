# @architecturex/components.table

## Table

A responsive and feature-rich table component built with React and custom styles.

### Installation

`npm install @architecturex/components.table`

### Features

- **Headers & Rows:** Display a dynamic list of headers and rows.
- **Hover Highlight:** Highlight table rows on hover.
- **Customizable Colors:** Define custom colors for headers, rows, and alternate rows.
- **Row Click Handler:** Execute a function when a table row is clicked.
- **Zebra Striping:** Option to display rows with alternate colors for better readability.
- **Column Alignment:** Set text alignment for each column.
- **Sorting:** Sort table data by clicking on the column headers.
- **Pagination:** Paginate rows and navigate between pages.

### Usage

```javascript
import React from 'react'
import Table from '@architecturex/components.table'

const App: React.FC = () => {
  const headers = ['Name', 'Age', 'Email']
  const rows = [
    ['John Doe', '28', 'john@example.com'],
    ['Jane Smith', '34', 'jane@example.com']
  ];

  return (
    <Table
      headers={headers}
      rows={rows}
      hoverHighlight
      striped
      rowsPerPage={10}
    />
  )
}

export default App
```

### Props

- **headers (required):** An array of strings representing table headers.
- **rows (required):** A 2D array of strings representing table rows.
- **hoverHighlight (optional, default = false):** A boolean indicating if rows should be highlighted on hover.
- **headerBgColor, rowColor, altRowColor (optional):** Strings to set custom colors for the header, rows, and alternate rows, respectively.
- **onRowClick (optional):** A function that gets called when a table row is clicked. It receives the row data and its index.
- **striped (optional, default = true):** A boolean indicating if zebra striping should be applied to rows.
- **columnAlignments (optional):** An array indicating the text alignment for each column. Values can be 'left', 'center', or 'right'.
- **rowsPerPage (optional, default = 10):** Number of rows to display per page for pagination.

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
