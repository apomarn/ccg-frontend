import React, { Component } from 'react'
import { allBreeds } from '../../data'
import Hero from '../Landing/Hero'
import Breed from './Breed'
import { Title, Body, Description, DescriptionContainer, AllPets } from './styles'
import Footer from '../../components/Footer'

class Breeds extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Title>Meet the breeds</Title>
        <Body>
          <DescriptionContainer>
            <Description>
              PetPaw is super attentive and detail-oriented when it comes to our puppies and our breeders. Buying a
              puppy can be one of the most joyful experiences of your life.
            </Description>
            <Description>
              That’s why we’re here. Petland puppies must meet standards before they can become Petland puppies. Let our
              pet counselors find the perfect match for you.
            </Description>
          </DescriptionContainer>
          <AllPets>
            {allBreeds.map(breed => {
              return <Breed {...breed} key={breed.breed} />
            })}
          </AllPets>
        </Body>
        <Footer />
      </div>
    )
  }
}

export default Breeds
