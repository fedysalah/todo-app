import React from 'react';
import PropTypes from 'prop-types';

import {
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
    this.fetchTodo = this.fetchTodo.bind(this);
  }


  static contextTypes = {
    router: PropTypes.object
  }


  fetchTodo(id) {
    this.setState((previousState, props) => {
      return {
        detailedTodo: previousState.todos.find(t => t.id === parseInt(id, 10))
      }
    });
  }


  createTodo(newtodo) {

    this.setState((previousState, props) => {
      newtodo.id = previousState.todos.length + 1;
      newtodo.status = NEW;
      return {
        todos: [...previousState.todos, newtodo],
      }
    }, () => this.context.router.push({
      pathname: '/'
    }));
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
                .includes(todo.status));

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       handleNewTodo: this.createTodo,
       todos: todosToDisplay,
       filters: this.state.filters,
       onFilterChange: this.handleFilterChange,
       fetchTodo: this.fetchTodo,
       detailedTodo: this.state.detailedTodo,
       allTodos: this.state.todos,
       nextStatus: this.handleNextStatus
     })
    );
    return (
      <div className="row">
        <div className="col s12">
          <div>
            <GeoPosition />
          </div>
        </div>
        {childrenWithProps}
      </div>
    );
  }
}

export default TodoApp;
