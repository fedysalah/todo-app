const initialState = {position: undefined};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'GEO_POSITION':
    return Object.assign({}, state, {position: action.position});  
  default:
    return state
  }
}
