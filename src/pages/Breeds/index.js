import React, { Component } from 'react'
import Hero from '../Landing/Hero'
import Breed from './Breed'
import { Title, Body, Description, DescriptionContainer, AllPets } from './styles'
import Footer from '../../components/Footer'

class Breeds extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allBreeds: []
    }
  }
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
            {this.state.allBreeds.map(breed => {
              return <Breed {...breed} key={breed.breed} />
            })}
          </AllPets>
        </Body>
        <Footer />
      </div>
    )
  }

  componentDidMount() {
    var url

    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    } else {
      url = 'https://ccg-server.herokuapp.com'
    }

    fetch(`${url}/allbreeds`)
      .then(data => data.json())
      .then(breeds => {
        this.setState({ allBreeds: breeds })
      })
      .catch(err => console.log(err))
  }
}

export default Breeds
