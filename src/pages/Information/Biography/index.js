import React, { Component } from 'react'
import { Body, Image, BreedName } from './styles'

class Biography extends Component {
  render() {
    const { image, breed, description, history, color } = this.props
    return (
      <Body>
        <Image src={image} key={breed} alt={breed} />

        <div>
          <BreedName>{breed}</BreedName>
          <div></div>
          <p>Description:</p>
          <p>{description}</p>
          <p>History:</p>
          <p>{history}</p>
          <p>Color:</p>
          <p>{color}</p>
        </div>
      </Body>
    )
  }
}

export default Biography
