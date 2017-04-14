import React from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../actions';

import { connect } from 'react-redux';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleCreateTodo(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.dispatch(Actions.addTodo(this.state));
    this.setState({
      title: '',
      description: ''
    }, () => this.context.router.push({pathname: '/'}))
  }

  render () {
    return (
      <div>
        <h3>Nouveau</h3>
        <form className="col s12">
          <div className="input-field col s12">
            <input placeholder="Titre" id="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
            <label htmlFor="title">Titre</label>
          </div>
          <div className="input-field col s12">
            <input placeholder="Description" id="description" type="text" value={this.state.description} onChange={this.handleInputChange}/>
            <label htmlFor="description">Description</label>
          </div>
          <a className="waves-effect waves-light btn" onClick={this.handleCreateTodo}>Valider</a>
        </form>
      </div>
    )
  }
}

export default TodoForm = connect()(TodoForm);
