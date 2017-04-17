import React from 'react';
import {
  Todo,
  NotFound
} from './index';
import Loader from './Loader';

export class TodoDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      fetched: false,
    }, () => this.props.fetchTodo(this.props.params.todoId));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allTodos && this.props.allTodos.length !== nextProps.allTodos.length) {
      this.props.fetchTodo(this.props.params.todoId);
    } else {
      this.setState({
        todo: nextProps.detailedTodo,
        fetched: true,
      })
    }
  }

  render () {
    if (this.state.todo) {
      return (
        <div>
          <h3>Détail du Todo {this.state.todo.id}</h3>
          <Todo todo={this.state.todo} />
        </div>
      )
    } else {
      if (this.state.fetched) {
        return (
          <NotFound />
        )
      } else {
        return (
            <Loader />
        )
      }
    }
  }
}
