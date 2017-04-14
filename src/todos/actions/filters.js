export const filterTodos = (filter) => {
  return {
    type: 'FILTER_CHANGE',
    filter
  }
}


export const loadFilters = (filters) => {
  return {
    type: 'LOAD_FILTERS',
    filters
  }
}
