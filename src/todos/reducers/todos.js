import {
  NEW,
  nextStatus
} from '../components/Statuses'


const initialState = {all: [], detailedTodo: undefined, fetchingDetail: false};

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
  case 'ADD_TODO':
    return Object.assign({}, state, {all: [
      Object.assign({}, action.todo, {id: state.all.length + 1}, {status: NEW}),
      ...state.all
    ]});
  case 'LOAD_TODOS':
    return Object.assign({}, state, {all: action.todos})
  case 'NEXT_STATUS_TODO':
    const todoIndex = state.all.findIndex(todo => todo.id === action.todo.id);
    state.all[todoIndex] = Object.assign({}, action.todo, {status: nextStatus[action.todo.status]})
    return Object.assign({}, state, {all: [...state.all]});
  case 'FETCHING': 
    return Object.assign({}, state, {fetchingDetail: action.fetching})
  case 'FETCH_TODO':
    const todo = state.all.find(t => {
      return t.id === parseInt(action.id, 10)
    });
    return Object.assign({}, state, {detailedTodo: todo}, {fetchingDetail: false});
  default:
    return state
  }
}
