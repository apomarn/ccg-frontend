import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PupContainer = styled.div`
  background-color: beige;
  width: 40%;
  padding-left: 20px;
  padding-right: 20px;
  height: 535px;
  border-radius: 30px;
`
const Header = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
`
const SubHeader = styled.p`
  font-size: 16px;
  font-weight: bold;
`
const Input = styled.input`
  width: 60%;
  height: 20px;
  padding-left: 10px;
  text-align: center;
  border-radius: 10px;
`
const Button = styled.button`
  background-color: green;
  height: 35px;
  width: 100%
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  border-radius: 20px;
  margin-top: 20px
`

class IncludePup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: undefined,
      name: '',
      type: '',
      breed: '',
      gender: ''
    }

    this.onImageChange = this.onImageChange.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.onBreedChange = this.onBreedChange.bind(this)
    this.onGenderChange = this.onGenderChange.bind(this)
    this.onPupSubmit = this.onPupSubmit.bind(this)
  }

  onImageChange(e) {
    this.setState({ image: e.target.value })
  }

  onNameChange(e) {
    this.setState({ name: e.target.value })
  }

  onTypeChange(e) {
    this.setState({ type: e.target.value })
  }

  onBreedChange(e) {
    this.setState({ breed: e.target.value })
  }

  onGenderChange(e) {
    this.setState({ gender: e.target.value })
  }

  onPupSubmit(e) {
    e.preventDefault()
    const newPup = {
      image: this.state.image,
      name: this.state.name,
      type: this.state.type,
      breed: this.state.breed,
      gender: this.state.gender
    }

    console.log(newPup)

    axios.post('http://localhost:5000/allpets', newPup).then(res => console.log(res.data))
    this.setState({
      image: undefined,
      name: '',
      type: '',
      breed: '',
      gender: ''
    })
  }

  render() {
    return (
      <PupContainer>
        <Header>Include a new available pup!</Header>
        <div>
          <form>
            <SubHeader>Image:</SubHeader>
            <Input type='text' value={this.state.image} onChange={this.onImageChange}></Input>
            <SubHeader>Name:</SubHeader>
            <Input type='text' value={this.state.name} onChange={this.onNameChange}></Input>
            <SubHeader>Type:</SubHeader>
            <input
              type='radio'
              name='animalType'
              value='Dog'
              checked={this.state.type === 'Dog'}
              onChange={this.onTypeChange}
            />{' '}
            Dog
            <br></br>
            <input
              type='radio'
              name='animalType'
              value='Cat'
              checked={this.state.type === 'Cat'}
              onChange={this.onTypeChange}
            />{' '}
            Cat
            <SubHeader>Breed:</SubHeader>
            <Input type='text' name='breed' value={this.state.breed} onChange={this.onBreedChange}></Input>
            <SubHeader>Gender:</SubHeader>
            <input
              type='radio'
              name='gender'
              value='Male'
              checked={this.state.gender === 'Male'}
              onChange={this.onGenderChange}
            />{' '}
            Male
            <br></br>
            <input
              type='radio'
              name='gender'
              value='Female'
              checked={this.state.gender === 'Female'}
              onChange={this.onGenderChange}
            />{' '}
            Female
            <br></br>
            <Button type='submit' onClick={this.onPupSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </PupContainer>
    )
  }
}

export default IncludePup
