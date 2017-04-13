import React from 'react';
import PropTypes from 'prop-types';

import {
  statusTranslations
} from './Statuses';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextStatus = this.handleNextStatus.bind(this);
  }

  static propTypes = {
    todo: PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status : PropTypes.string.isRequired
    })
  }

  handleNextStatus(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.nextStatus(this.props.todo);
  }

  render () {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.todo.title}</span>
          <p>{this.props.todo.description}</p>
        </div>
        <div className="card-action">
          <a href="#" onClick={this.handleNextStatus}>{statusTranslations[this.props.todo.status]}</a>
        </div>
      </div>
    )
  }
}
