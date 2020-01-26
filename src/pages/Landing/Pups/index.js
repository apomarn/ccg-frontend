import React, { Component } from 'react'
import { Title, Subtitle, NoMatch, Wrapper } from './styles'
import Pet from '../Pet'
import Filters from '../Filters'

class Pups extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allPets: [],
      type: 'All',
      breed: 'All',
      gender: 'All'
    }

    this.onChangeBreed = this.onChangeBreed.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
  }

  onChangeType(e) {
    this.setState({ type: e.target.value })
  }

  onChangeBreed(e) {
    this.setState({ breed: e.target.value })
  }

  onChangeGender(e) {
    this.setState({ gender: e.target.value })
  }

  showPets() {
    const { allPets, type, breed, gender } = this.state

    const matchingPets = []

    for (var i = 0; i < allPets.length; i++) {
      const pet = allPets[i]

      const foundType = ['All', pet.type].includes(type)
      const foundBreed = ['All', pet.breed].includes(breed)
      const foundGender = ['All', pet.gender].includes(gender)

      if (foundType && foundBreed && foundGender) {
        matchingPets.push(pet)
      }
    }

    if (matchingPets.length === 0) {
      return (
        <NoMatch>
          <p>Sorry, there are no matches, try again!</p>
        </NoMatch>
      )
    }

    return (
      <Wrapper>
        {matchingPets.map(pet => (
          <Pet {...pet} key={pet.image} />
        ))}
      </Wrapper>
    )
  }

  render() {
    return (
      <>
        <Title>Available</Title>
        <Subtitle>Puppies</Subtitle>
        <Filters
          allPets={this.state.allPets}
          type={this.state.type}
          breed={this.state.breed}
          gender={this.state.gender}
          onChangeType={this.onChangeType}
          onChangeBreed={this.onChangeBreed}
          onChangeGender={this.onChangeGender}
        />
        {this.showPets()}
      </>
    )
  }

  componentDidMount() {
    var url

    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    } else {
      url = 'https://ccg-server.herokuapp.com'
    }

    fetch(`${url}/allpets`)
      .then(data => data.json())
      .then(pets => {
        this.setState({ allPets: pets })
      })
      .catch(err => console.log(err))
  }
}

export default Pups
