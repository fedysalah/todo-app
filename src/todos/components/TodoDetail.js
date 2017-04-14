import React from 'react';
import Todo from './Todo';
import Loader from './Loader';

import * as Actions from '../actions';

import { connect } from 'react-redux';

class TodoDetail extends React.Component {

  componentDidMount() {
    this.props.dispatch(Actions.fetchTodo(this.props.params.todoId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todo === undefined && nextProps.todo === undefined) {
      if (nextProps.all && nextProps.all.length > 0) {
        this.props.dispatch(Actions.fetchTodo(this.props.params.todoId));
      }
    }
  }

  render () {
    if (this.props.todo) {
      return (
        <div>
          <h3>Détail du Todo {this.props.todo.id}</h3>
          <Todo todo={this.props.todo} />
        </div>
      )
    } else {
      return (
          <Loader />
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    all: state.todos.all,
    todo: state.todos.detailedTodo,
  }
}

export default TodoDetail = connect(mapStateToProps)(TodoDetail);
