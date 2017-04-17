export const filterTodos = (filter) => {
  return {
    type: 'FILTER_CHANGE',
    filter
  }
}
