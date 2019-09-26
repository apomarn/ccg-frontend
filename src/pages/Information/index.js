import React, { Component } from 'react'
import Biography from './Biography'

class Information extends Component {
  render() {
    return (
      <div>
        <p>{this.props.breed}</p>
        <Biography {...this.props} />
      </div>
    )
  }
}

export default Information
