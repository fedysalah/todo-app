import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todos/TodoApp';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './todos/reducers'

import { Provider } from 'react-redux'

// applyMiddleware et thunk sont nécessaires
// pour l'action geo (cf. utilisation du dispatch dans la définition de l'action)
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
