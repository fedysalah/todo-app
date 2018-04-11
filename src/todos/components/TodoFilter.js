import React, {Component} from 'react';

import {
  NEW,
  IN_PROGRESS,
  DONE
} from './Statuses';

export class TodoFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Filtres</h3>
        <input type="checkbox" id={NEW}/>
        <label htmlFor={NEW}>Nouveau</label>
        <input type="checkbox" id={IN_PROGRESS}/>
        <label htmlFor={IN_PROGRESS}>En cours</label>
        <input type="checkbox"/>
        <label htmlFor={DONE}>Terminé</label>
      </div>
    )
  }
}