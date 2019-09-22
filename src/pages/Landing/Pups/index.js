import React, { Component } from 'react'
import {
  Container,
  Header,
  SecondHeader,
  FilterLogo,
  Description,
  FilterOptions,
  Form,
  Options,
  DropDown,
  PetContainer,
  NoMatch,
  Wrapper
} from './styles'

class AvailablePups extends Component {
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
    this.setState({
      type: e.target.value
    })
  }

  onChangeBreed(e) {
    this.setState({
      breed: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  filterPetTypes() {
    const types = this.state.allPets.map(pet => {
      return pet.type
    })

    const unduplicatedTypes = []

    types.forEach(type => {
      if (!unduplicatedTypes.includes(type)) {
        unduplicatedTypes.push(type)
      }
    })

    return (
      <>
        {unduplicatedTypes.map(type => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          )
        })}
      </>
    )
  }

  filterPetBreed() {
    const breeds = this.state.allPets.map(pet => {
      return pet.breed
    })

    const unduplicatedBreed = []

    breeds.forEach(breed => {
      if (!unduplicatedBreed.includes(breed)) {
        unduplicatedBreed.push(breed)
      }
    })

    return (
      <>
        {unduplicatedBreed.map(breed => {
          return (
            <option key={breed} value={breed}>
              {breed}
            </option>
          )
        })}
      </>
    )
  }

  filterPetGender() {
    const genders = this.state.allPets.map(pet => {
      return pet.gender
    })

    const unduplicatedGender = []

    genders.forEach(gender => {
      if (!unduplicatedGender.includes(gender)) {
        unduplicatedGender.push(gender)
      }
    })

    return (
      <>
        {unduplicatedGender.map(gender => {
          return (
            <option key={gender} value={gender}>
              {gender}
            </option>
          )
        })}
      </>
    )
  }

  showPets() {
    var newfilter = []
    for (var i = 0; i < this.state.allPets.length; i++) {
      if (this.state.allPets[i].gender === this.state.gender || this.state.gender === 'All') {
        if (this.state.allPets[i].breed === this.state.breed || this.state.breed === 'All') {
          if (this.state.allPets[i].type === this.state.type || this.state.type === 'All') {
            newfilter.push(this.state.allPets[i])
          }
        }
      }
    }

    if (newfilter.length === 0) {
      return (
        <NoMatch>
          <p>Sorry, there are no matches, try again!</p>
        </NoMatch>
      )
    }

    return (
      <Wrapper>
        {newfilter.map(pet => {
          return (
            <div key={pet._id} style={{ margin: '10px 0' }}>
              <img src={pet.image} alt={pet.name} height='250' width='250' />
              <PetContainer>
                <p style={{ margin: '0', paddingTop: '10px' }}>
                  <strong>Name: </strong> {pet.name}
                </p>
                <p>
                  <strong>Type: </strong>
                  {pet.type}
                </p>
                <p>
                  <strong>Breed: </strong>
                  {pet.breed}
                </p>
                <p>
                  <strong>Gender: </strong>
                  {pet.gender}
                </p>
              </PetContainer>
            </div>
          )
        })}
      </Wrapper>
    )
  }

  render() {
    return (
      <div>
        <Header>AVAILABLE</Header>
        <SecondHeader>PUPPIES</SecondHeader>
        <Container>
          <FilterLogo src='../images/filter.jpg' alt='filter-logo' />
          <Description>Filter By:</Description>
          <FilterOptions>
            <Form>
              <Options>PET TYPE</Options>

              <DropDown onChange={this.onChangeType} value={this.state.type}>
                <option value='All'>All</option>
                {this.filterPetTypes()}
              </DropDown>

              <Options>BREED</Options>
              <DropDown onChange={this.onChangeBreed} value={this.state.breed}>
                <option value='All'>All</option>
                {this.filterPetBreed()}
              </DropDown>
              <Options>GENDER</Options>
              <DropDown onChange={this.onChangeGender} value={this.state.gender}>
                <option value='All'>All</option>
                {this.filterPetGender()}
              </DropDown>
            </Form>
          </FilterOptions>
        </Container>
        {this.showPets()}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:5000/allpets')
      .then(data => data.json())
      .then(pets => {
        this.setState({
          allPets: pets
        })
      })
      .catch(err => console.log(err))
  }
}

export default AvailablePups
