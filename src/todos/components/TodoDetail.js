import React from 'react';
import Todo from './Todo';
import Loader from './Loader';
import {
  NotFound
} from './NotFound';
import * as Actions from '../actions';

import { connect } from 'react-redux';

class TodoDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
    }
  }

  componentDidMount() {
    this.props.dispatch(Actions.fetchingTodo());
    this.props.dispatch(Actions.fetchTodo(this.props.params.todoId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todo === undefined && nextProps.todo === undefined) {
      if (nextProps.all && nextProps.all.length > 0) {
        if (nextProps.all.length !== this.props.all.length) {
          this.props.dispatch(Actions.fetchTodo(this.props.params.todoId));
        }
      }
    }
    this.setState({
      fetching: nextProps.fetching,
    })
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
      if (this.state.fetching) {
        return (
          <Loader />
        )
      }
       else {
         return (
           <NotFound />
         )
      }
    }
  }
}


const mapStateToProps = (state) => {
  return {
    all: state.todos.all,
    todo: state.todos.detailedTodo,
    fetching: state.todos.fetchingDetail
  }
}

export default TodoDetail = connect(mapStateToProps)(TodoDetail);
