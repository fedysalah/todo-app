import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './Todo';

export class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status : PropTypes.string.isRequired
    })).isRequired,
    nextStatus: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <h3>Liste des TODOs</h3>
        {
          this.props.todos.map(todo => {
            return <Todo key={todo.id} todo={todo} nextStatus={this.props.nextStatus}/>
          })
        }
      </div>
    );
  }
}
