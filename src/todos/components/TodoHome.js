import React from 'react'

import { Link } from 'react-router';
import {
  TodoFilter,
  TodoList,
  TodoStats,
} from './index';

import * as Actions from '../actions';

import { connect } from 'react-redux';

class TodoHome extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleNextStatus = this.handleNextStatus.bind(this);
  }

  handleFilterChange(filter) {
    this.props.dispatch(Actions.filterTodos(filter))
  }

  handleNextStatus(todo) {
    //this.props.dispatch(Actions.nextStatusTodo(todo))
  }

  render() {
    const todosToDisplay = this.props.todos.filter(
      todo => Object.keys(this.props.filters)
                .filter(f => this.props.filters[f])
                .includes(todo.status));
    return (
      <div>
        <div className="col s4">
          <div>
            <TodoStats todos={todosToDisplay} />
          </div>
        </div>
        <div className="col s8">
          <div>
            <TodoFilter filters={this.props.filters} onFilterChange={this.handleFilterChange} />
          </div>
          <div>
            <h3>
              <Link to="/new" className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></Link>
            </h3>

            <TodoList todos={todosToDisplay} nextStatus={this.handleNextStatus} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.all,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TodoHome);
