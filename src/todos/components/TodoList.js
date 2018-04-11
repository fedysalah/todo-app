import React, {Component} from 'react';

import {Todo} from './Todo';

export class TodoList extends Component {

  render () {
    return (
      <div>
        <h3>Liste des TODOs</h3>
         <Todo/>
      </div>
    );
  }
}
