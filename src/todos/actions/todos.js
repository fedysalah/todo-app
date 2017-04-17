export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export const loadTodos = (todos) => {
  return {
    type: 'LOAD_TODOS',
    todos
  }
}

export const nextTodoStatus = (todo) => {
  return {
    type: 'NEXT_STATUS_TODO',
    todo
  }
}
