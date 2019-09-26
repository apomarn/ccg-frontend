import React, { Component } from 'react'

class Biography extends Component {
  render() {
    const { image, breed, description, history, color } = this.pros
    return (
      <div>
        <img src={image} key={breed} alt={breed} />

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

export default Biography
