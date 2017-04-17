import React from 'react'
import Loader from './Loader';
import {
  geo
} from '../actions';
import { connect } from 'react-redux';

class GeoPositionComponent extends React.Component {

  componentDidMount() {
    this.props.dispatch(geo());
  }

  render () {
    if (this.props.position) {
      return (
        <div>
          Vous êtes situé à {this.props.position}
        </div>
      )
    } else {
      return (
        <Loader />
      )
    }

  }
}


const mapStateToProps = (state) => {
  return {
    position: state.geo.position
  }
}

export const GeoPosition = connect(mapStateToProps)(GeoPositionComponent)
