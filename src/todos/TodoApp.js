import React from 'react'

import {
  TodoStats,
  TodoForm,
  TodoFilter,
  TodoList,
} from './components';


export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="row">
        <div className="col s4">
          <TodoForm/>
          <TodoStats/>
        </div>
        <div className="col s8">
          <TodoFilter/>
          <TodoList/>
        </div>
      </div>
    );
  }
}