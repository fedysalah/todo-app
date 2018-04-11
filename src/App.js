import React, { Component } from 'react';
import './App.css';

export default  class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s4">
          <div>
            <h3>Nouveau</h3>
            <form className="col s12">
              <div className="input-field col s12">
                <input placeholder="Titre" id="title" type="text" />
                <label htmlFor="title">Titre</label>
              </div>
              <div className="input-field col s12">
                <input placeholder="Description" id="description" type="text" />
                <label htmlFor="description">Description</label>
              </div>
            </form>
          </div>
          <div>
            <h3>Stats</h3>
            <p>42 TODOs</p>
          </div>
        </div>
        <div className="col s8">
          <div>
            <h3>Filtres</h3>
            <input type="checkbox" id="new" />
            <label htmlFor="new">Nouveau</label>
            <input type="checkbox" id="in_progress" />
            <label htmlFor="in_progress">En cours</label>
            <input type="checkbox" id="done" />
            <label htmlFor="done">Terminé</label>
          </div>
          <div>
            <h3>Liste des TODOs</h3>

            <div className="card">
              <div className="card-content">
                <span className="card-title">Titre 1</span>
                <p>Description 1</p>
              </div>
              <div className="card-action">
                <a href="#">Commencer</a>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <span className="card-title">Titre 2</span>
                <p>Description 2</p>
              </div>
              <div className="card-action">
                <a href="#">Terminer</a>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <span className="card-title">Titre 3</span>
                <p>Description 3</p>
              </div>
              <div className="card-action">
                <a href="#">Commencer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
