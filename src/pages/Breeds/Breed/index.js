import React, { Component } from 'react'

import { Image, Container, BreedName, Description, DescriptionContainer, Plus, PlusContainer } from './styles'

class Breed extends Component {
  render() {
    const { breed, image, description } = this.props

    return (
      <Container to={`/breeds/${breed}`} key={breed}>
        <Image src={image} key={breed} alt={breed} />
        <BreedName>{breed}</BreedName>
        <DescriptionContainer>
          <Description>{description}</Description>
          <PlusContainer>
            <Plus>+</Plus>
          </PlusContainer>
        </DescriptionContainer>
      </Container>
    )
  }
}

export default Breed
