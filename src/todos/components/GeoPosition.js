import React from 'react'
import Loader from './Loader';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class GeoPosition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: null
    }
  }

  componentDidMount() {
    this.props.dispatch(Actions.geo());
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

export default GeoPosition = connect(mapStateToProps)(GeoPosition)
