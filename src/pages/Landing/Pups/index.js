import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: gray;
  display: flex;
`

const Header = styled.h3`
  color: gray;
  font-weight: 700;
  margin: 0;
  font-size: 40px;
`
const SecondHeader = styled.h1`
  color: gray;
  font-weight: 700;
  margin: 0;
  font-size: 70px;
  margin-bottom: 20px;
`

const FilterLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 20px;
`
const Description = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-right: 40px;
`
const FilterOptions = styled.div`
  color: white;
  font-size: 16px;
  display: flex;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 100px;
  flex-wrap: wrap;
`

const Options = styled.p`
  margin-right: 10px;
`

const DropDown = styled.select`
  width: 100px;
  margin-right: 30px;
`

const PetContainer = styled.div`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  padding: 10px;
`

const NoMatch = styled.div`
  border: 1px solid blue;
  background-color: lightblue;
  color: blue;
  text-align: center;
  border-radius: 25px;
  margin: 30px;
`

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
    const valueType = e.target.value
    this.setState({
      type: valueType
    })
  }

  onChangeBreed(e) {
    const valueBreed = e.target.value
    this.setState({
      breed: valueBreed
    })
  }

  onChangeGender(e) {
    const valueGender = e.target.value
    this.setState({
      gender: valueGender
    })
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
      } else {
        return (
          <NoMatch>
            <p>Sorry, there are no matches, try again!</p>
          </NoMatch>
        )
      }
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px',  backgroundColor: "beige" }}>
        {newfilter.map(pet => {
          return (
            <div style={{margin: "10px 0"}}>
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
      </div>
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
                {this.state.allPets.map(pet => {
                  return <option key={pet._id}>{pet.type}</option>
                })}
              </DropDown>

              <Options>BREED</Options>
              <DropDown onChange={this.onChangeBreed} value={this.state.breed}>
                <option value='All'>All</option>
                {this.state.allPets.map(pet => {
                  return <option key={pet._id}>{pet.breed}</option>
                })}
              </DropDown>
              <Options>GENDER</Options>
              <DropDown onChange={this.onChangeGender} value={this.state.gender}>
                <option value='All'>All</option>
                {this.state.allPets.map(pet => {
                  return <option key={pet._id}>{pet.gender}</option>
                })}
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
