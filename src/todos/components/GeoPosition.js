import React from 'react'
import Loader from './Loader';

export class GeoPosition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: null
    }
  }

  componentDidMount() {

      fetch('https://freegeoip.net/json/').then(response => {
         return response.json()
      }).then(json => {
        setTimeout(
         this.setState({
           city: json.city
         }), 2000);
      }).catch(e => {
         console.log('parsing failed', e)
      })
  }

  render () {
    if (this.state.city) {
      return (
        <div>
          Vous êtes situé à {this.state.city}
        </div>
      )
    } else {
      return (
        <Loader />
      )
    }

  }
}
