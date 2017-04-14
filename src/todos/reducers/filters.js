const initialState = {
}

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
  case 'FILTER_CHANGE':
    return Object.assign(
        {},
        state,
        action.filter
      )
  case 'LOAD_FILTERS':
    return action.filters
  default:
    return state
  }
}
