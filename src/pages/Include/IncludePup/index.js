import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PupContainer = styled.div`
  background-color: pink;
`

class IncludePup extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      image: '',
      name: '',
      type: '',
      breed: '',
      gender: ''
    }
    this.state = this.initialState

    this.onImageChange = this.onImageChange.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.onBreedChange = this.onBreedChange.bind(this)
    this.onGenderChange = this.onGenderChange.bind(this)
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
    this.props.onCreate(this.state)

    this.setState(this.initialState)
    axios.post('http://localhost:5000/allbreeds', this.state).then(data => data.json())
  }

  render() {
    return (
      <PupContainer>
        <p>Include a new available pup</p>
        <div>
          <form>
            <p>Image:</p>
            <input value={this.state.image} onChange={this.onImageChange}></input>
            <p>Name:</p>
            <input type='text' value={this.state.name} onChange={this.onNameChange}></input>
            <p>Type:</p>
            <input type='radio' name='animalType' value={this.state.type} onChange={this.onTypeChange} /> Dog
            <br></br>
            <input type='radio' name='animalType' value={this.state.type} onChange={this.onTypeChange} /> Cat
            <p>Breed:</p>
            <input></input>
            <p>Gender:</p>
            <input type='radio' name='gender' value={this.state.gender} onChange={this.onGenderChange} checked /> Male
            <br></br>
            <input type='radio' name='gender' value={this.state.gender} onChange={this.onGenderChange} /> Female
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
