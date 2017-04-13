import React from 'react';
import PropTypes from 'prop-types';

import {
  NEW,
  IN_PROGRESS,
  DONE
} from './Statuses';

export class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  static propTypes = {
    filters: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  }

  handleOnChange(e) {
    this.props.onFilterChange({[e.target.id]: e.target.checked})
  }

  render () {
    return (
      <div>
        <h3>Filtres</h3>
        <input type="checkbox" id={NEW} checked={this.props.filters[NEW] ? 'checked': ''} onChange={this.handleOnChange}/>
        <label htmlFor={NEW}>Nouveau</label>
        <input type="checkbox" id={IN_PROGRESS} checked={this.props.filters[IN_PROGRESS] ? 'checked': ''} onChange={this.handleOnChange} />
        <label htmlFor={IN_PROGRESS}>En cours</label>
        <input type="checkbox" id={DONE} checked={this.props.filters[DONE] ? 'checked': ''} onChange={this.handleOnChange} />
        <label htmlFor={DONE}>Terminé</label>
      </div>
    )
  }
}

export default TodoFilter;
