import React, { Component } from 'react'
import { Container, Photo, Info } from './styles'

class Pet extends Component {
  render() {
    const { name, image, type, breed, gender } = this.props

    return (
      <Container>
        <Photo src={image} alt={name} />
        <Info>
          <p>
            <strong>Name: </strong> {name}
          </p>
          <p>
            <strong>Type: </strong> {type}
          </p>
          <p>
            <strong>Breed: </strong> {breed}
          </p>
          <p>
            <strong>Gender: </strong> {gender}
          </p>
        </Info>
      </Container>
    )
  }
}

export default Pet
