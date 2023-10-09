export type Configuration = {
  components: {
    table: {
      defaultProps: {
        rowsPerPage?: number
      }
    }
  }
}

const config: Configuration = {
  components: {
    table: {
      defaultProps: {
        rowsPerPage: 10
      }
    }
  }
}

export default config
