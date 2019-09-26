import React, { Component } from 'react'

class Information extends Component {
  render() {
    const { image, breed, description, history, color } = this.props
    return (
      <div>
        <div>
          <img src={image} key={breed} alt={breed} />
        </div>
        <div>
          <h1>{breed}</h1>
          <div></div>
          <p>Description:</p>
          <p>{description}</p>
          <p>History:</p>
          <p>{history}</p>
          <p>Color:</p>
          <p>{color}</p>
        </div>
      </div>
    )
  }
}

export default Information
