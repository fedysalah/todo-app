import React from 'react'

import {
  TodoStats,
  TodoForm,
  TodoFilter,
  TodoList,
  GeoPosition,
} from './components';

import {
  NEW,
  IN_PROGRESS,
  DONE,
  nextStatus
} from './components/Statuses'


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, title: 'Titre 1', description: 'description 1', status: NEW},
        {id: 2, title: 'Titre 2', description: 'description 2', status: DONE},
        {id: 3, title: 'Titre 3', description: 'description 3', status: IN_PROGRESS},
      ],
      filters: {
        [NEW]: true,
        [IN_PROGRESS]: true,
        [DONE]: true
      }
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleNextStatus = this.handleNextStatus.bind(this);
  }

  createTodo(newtodo) {

    this.setState((previousState, props) => {
      newtodo.id = previousState.todos.length + 1;
      newtodo.status = NEW;
      return {
        todos: [...previousState.todos, newtodo],
      }
    })
  }

  handleFilterChange(newfilter) {
    this.setState((previousState, props) => {
      return {
        filters: Object.assign(previousState.filters, newfilter)
      }
    })
  }

  handleNextStatus(todo) {
    this.setState((previousState, props) => {
      const allTodos = previousState.todos;
      allTodos.find(t => t.id === todo.id).status = nextStatus[todo.status]
      return {
        todos: allTodos,
      }
    })
  }

  render () {
    const todosToDisplay = this.state.todos.filter(
      todo => Object.keys(this.state.filters)
                .filter(f => this.state.filters[f])
                .includes(todo.status))
    return (
      <div className="row">
        <div className="col s4">
          <GeoPosition />
          <TodoForm handleNewTodo={this.createTodo}/>
          <TodoStats todos={todosToDisplay}/>
        </div>
        <div className="col s8">
          <TodoFilter filters={this.state.filters} onFilterChange={this.handleFilterChange} />
          <TodoList todos={todosToDisplay} nextStatus={this.handleNextStatus}/>
        </div>
      </div>
    );
  }
}

export default TodoApp;
