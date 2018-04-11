import React, {Component} from 'react';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Nouveau</h3>
        <form className="col s12">
          <div className="input-field col s12">
            <input placeholder="Titre" id="title" type="text"/>
            <label htmlFor="title">Titre</label>
          </div>
          <div className="input-field col s12">
            <input placeholder="Description" id="description" type="text"/>
            <label htmlFor="description">Description</label>
          </div>
          <a className="waves-effect waves-light btn">Valider</a>
        </form>
      </div>
    )
  }
}
