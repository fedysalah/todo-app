import React from 'react'

import GeoPosition from './components/GeoPosition';


class TodoApp extends React.Component {

  render () {
    return (
      <div className="row">
        <div className="col s12">
          <GeoPosition />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default TodoApp;
