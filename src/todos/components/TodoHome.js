import React from 'react';
import { Link } from 'react-router';

import {
  TodoStats,
  TodoFilter,
  TodoList
} from './index';

export class TodoHome extends React.Component {

  render () {
    return (
      <div>
        <div className="col s4">
          <div>
            <TodoStats todos={this.props.todos} />
          </div>
        </div>
        <div className="col s8">
          <div>
            <TodoFilter filters={this.props.filters} onFilterChange={this.props.onFilterChange} />
          </div>
          <div>
            <h3>
            <Link to="/new" className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></Link>
            </h3>

            <TodoList todos={this.props.todos} nextStatus={this.props.nextStatus}/>
          </div>
        </div>
      </div>
    )
  }
}
