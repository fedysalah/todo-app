import {
  NEW,
  nextStatus
} from '../components/Statuses';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      Object.assign({}, action.todo, {id: state.length + 1}, {status: NEW}),
      ...state
    ]
  case 'LOAD_TODOS':
    return action.todos
  case 'NEXT_STATUS_TODO':
    const indexToUpdated = state.findIndex(todo => todo.id === action.todo.id);
    const newTodo = Object.assign({}, action.todo, {status: nextStatus[action.todo.status]})
    state[indexToUpdated] = newTodo;
    return [...state];
  default:
    return state
  }
}
