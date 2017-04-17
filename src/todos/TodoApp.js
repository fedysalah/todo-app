import React from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';

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
  DONE
} from './components/Statuses'


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleNextStatus = this.handleNextStatus.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(Actions.loadTodos([
      {id: 1, title: 'Titre 1', description: 'description 1', status: NEW},
      {id: 2, title: 'Titre 2', description: 'description 2', status: DONE},
      {id: 3, title: 'Titre 3', description: 'description 3', status: IN_PROGRESS},
    ]))
  }

  handleFilterChange(newfilter) {
    // Exemple où on définit une fonction callback mais que cette fonction
    // utilise this.props.dispatch et qu'ainsi le code du sous composant ne change pas
    this.props.dispatch(Actions.filterTodos(newfilter));
  }

  handleNextStatus(todo) {
    // Exemple où on définit une fonction callback mais que cette fonction
    // utilise this.props.dispatch et qu'ainsi le code du sous composant ne change pas
    this.props.dispatch(Actions.nextTodoStatus(todo));
  }

  render () {
    const todosToDisplay = this.props.todos.filter(
      todo => Object.keys(this.props.filters)
                .filter(f => this.props.filters[f])
                .includes(todo.status))
    return (
      <div className="row">
        <div className="col s4">
          <GeoPosition />
          <TodoForm />
          <TodoStats todos={todosToDisplay}/>
        </div>
        <div className="col s8">
          <TodoFilter filters={this.props.filters} onFilterChange={this.handleFilterChange} />
          <TodoList todos={todosToDisplay} nextStatus={this.handleNextStatus}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters
  }
}

export default TodoApp = connect(mapStateToProps)(TodoApp);
