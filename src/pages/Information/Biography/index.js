import React, { Component } from 'react'
import { Body, Image, BreedName, Div, Subtitle, Description } from './styles'

class Biography extends Component {
  render() {
    const { image, breed, description, history, color } = this.props
    return (
      <Body>
        <Image src={image} key={breed} alt={breed} />

        <div>
          <BreedName>{breed}</BreedName>
          <Div></Div>
          <Subtitle>Description:</Subtitle>
          <Description>{description}</Description>
          <Subtitle>History:</Subtitle>
          <Description>{history}</Description>
          <Subtitle>Color:</Subtitle>
          <Description>{color}</Description>
        </div>
      </Body>
    )
  }
}

export default Biography
