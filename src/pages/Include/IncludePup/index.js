import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PupContainer = styled.div`
  background-color: pink;
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
        <p>Include a new available pup</p>
        <div>
          <form>
            <p>Image:</p>
            <input type='text' value={this.state.image} onChange={this.onImageChange}></input>
            <p>Name:</p>
            <input type='text' value={this.state.name} onChange={this.onNameChange}></input>
            <p>Type:</p>
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
            <p>Breed:</p>
            <input type='text' name='breed' value={this.state.breed} onChange={this.onBreedChange}></input>
            <p>Gender:</p>
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
            <button type='submit' onClick={this.onPupSubmit}>
              Submit
            </button>
          </form>
        </div>
      </PupContainer>
    )
  }
}

export default IncludePup
