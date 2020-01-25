import React, { Component } from 'react'
import Hero from '../Landing/Hero'
import styled from 'styled-components'

const PupContainer = styled.div`
  background-color: pink;
`

class Include extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PupContainer>
          <p>Include a new available pup</p>
          <div>
            <form>
              <p>Image:</p>
              <input></input>
              <p>Name:</p>
              <input type='text'></input>
              <p>Type:</p>
              <input type='radio' name='animalType' value='Dog' checked /> Dog
              <br></br>
              <input type='radio' name='animalType' value='Cat' /> Cat
              <p>Breed:</p>
              <input></input>
              <p>Type:</p>
              <input type='radio' name='gender' value='Male' checked /> Male
              <br></br>
              <input type='radio' name='gender' value='Female' /> Female
              <br></br>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </PupContainer>
        <div>
          <p>Include a new breed</p>
          <div>
            <form>
              <p>Image:</p>
              <input></input>
              <p>Breed:</p>
              <input></input>
              <p>Description:</p>
              <input type='textarea'></input>
              <p>Color:</p>
              <input></input>
              <p>Temperament:</p>
              <input></input>
              <div>
                <div>
                  <p>Adaptability</p>
                  <p>Apartment</p>
                  <input></input>
                  <p>Owners</p>
                  <input></input>
                  <p>Alone</p>
                  <input></input>
                  <p>Weather</p>
                  <input></input>
                  <p>Friendly</p>
                  <input></input>
                </div>
                <div>
                  <p>Exercise</p>
                  <p>Energy</p>
                  <input></input>
                  <p>Exercise</p>
                  <input></input>
                  <p>Playfylness</p>
                  <input></input>
                </div>
              </div>
              <p>Trainability:</p>
              <input></input>
              <p>Barking:</p>
              <input></input>
              <br></br>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Include
