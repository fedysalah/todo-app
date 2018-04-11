import React, {Component} from 'react';

import {
  statusTranslations,
  NEW
} from './Statuses';

export class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">titre</span>
          <p>desc</p>
        </div>
        <div className="card-action">
          <a>{statusTranslations[NEW]}</a>
        </div>
      </div>
    )
  }
}
