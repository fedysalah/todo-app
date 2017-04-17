
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export const nextStatusTodo = (todo) => {
  return {
    type: 'NEXT_STATUS_TODO',
    todo
  }
}

export const loadTodos = (todos) => {
  return {
    type: 'LOAD_TODOS',
    todos
  }
}

export const fetchingTodo = () => {
  return {
    type: 'FETCHING',
    fetching: true,
  }
}

export const fetchTodo = (id) => {
  return {
      type: 'FETCH_TODO',
      id
    };
}
