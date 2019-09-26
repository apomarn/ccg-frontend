import React, { Component } from 'react'
import { allBreeds } from '../../data'
import Hero from '../Landing/Hero'
import Breed from './Breed'

class Breeds extends Component {
  render() {
    return (
      <div>
        <Hero />
        <h2>Meet the breeds</h2>
        <p>
          PetPaw is super attentive and detail-oriented when it comes to our puppies and our breeders. Buying a puppy
          can be one of the most joyful experiences of your life.<br></br>That’s why we’re here. Petland puppies must
          meet standards before they can become Petland puppies. Let our pet counselors find the perfect match for you.
        </p>
        <div>
          {allBreeds.map(breed => {
            return <Breed {...breed} key={breed.breed} />
          })}
        </div>
      </div>
    )
  }
}

export default Breeds
