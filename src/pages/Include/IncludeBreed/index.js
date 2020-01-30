import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BreedContainer = styled.div`
  background-color: lightBlue;
  width: 40%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
`

const Header = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
`
const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  background-color: blue;
  height: 35px;
  width: 100%
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  border-radius: 20px;
  margin-top: 20px
`

class IncludeBreed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: undefined,
      breed: '',
      description: '',
      history: '',
      color: '',
      temperament: '',
      adaptability: {
        apartment: 0,
        owners: 0,
        alone: 0,
        weather: 0,
        friendly: 0
      },
      exercise: {
        energy: 0,
        exercise: 0,
        playfulness: 0
      },
      trainability: 0,
      barking: ''
    }

    this.onImageChange = this.onImageChange.bind(this)
    this.onBreedChange = this.onBreedChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onHistoryChange = this.onHistoryChange.bind(this)
    this.onColorChange = this.onColorChange.bind(this)
    this.onTemperamentChange = this.onTemperamentChange.bind(this)
    this.onApartmentChange = this.onApartmentChange.bind(this)
    this.onOwnersChange = this.onOwnersChange.bind(this)
    this.onAloneChange = this.onAloneChange.bind(this)
    this.onWeatherChange = this.onWeatherChange.bind(this)
    this.onFriendlyChange = this.onFriendlyChange.bind(this)
    this.onEnergyChange = this.onEnergyChange.bind(this)
    this.onExerciseChange = this.onExerciseChange.bind(this)
    this.onPlayfulnessChange = this.onPlayfulnessChange.bind(this)
    this.onTrainabilityChange = this.onTrainabilityChange.bind(this)
    this.onBarkingChange = this.onBarkingChange.bind(this)
    this.onBreedSubmit = this.onBreedSubmit.bind(this)

    this.adaptabilityChange = (oldState, type, value) => {
      return {
        adaptability: {
          ...oldState.adaptability,
          [type]: value
        }
      }
    }

    this.exerciseChange = (oldState, type, value) => {
      return {
        exercise: {
          ...oldState.exercise,
          [type]: value
        }
      }
    }
  }

  onImageChange(e) {
    this.setState({ image: e.target.value })
  }
  onBreedChange(e) {
    this.setState({ breed: e.target.value })
  }
  onDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }
  onHistoryChange(e) {
    this.setState({ history: e.target.value })
  }
  onColorChange(e) {
    this.setState({ color: e.target.value })
  }
  onTemperamentChange(e) {
    this.setState({ temperament: e.target.value })
  }
  onApartmentChange(e) {
    const value = e.target.value
    this.setState(oldState => this.adaptabilityChange(oldState, 'apartment', value))
  }
  onOwnersChange(e) {
    const value = e.target.value
    this.setState(oldState => this.adaptabilityChange(oldState, 'owners', value))
  }
  onAloneChange(e) {
    const value = e.target.value
    this.setState(oldState => this.adaptabilityChange(oldState, 'alone', value))
  }
  onWeatherChange(e) {
    const value = e.target.value
    this.setState(oldState => this.adaptabilityChange(oldState, 'weather', value))
  }
  onFriendlyChange(e) {
    const value = e.target.value
    this.setState(oldState => this.adaptabilityChange(oldState, 'friendly', value))
  }
  onEnergyChange(e) {
    const value = e.target.value
    this.setState(oldState => this.exerciseChange(oldState, 'energy', value))
  }
  onExerciseChange(e) {
    const value = e.target.value
    this.setState(oldState => this.exerciseChange(oldState, 'exercise', value))
  }
  onPlayfulnessChange(e) {
    const value = e.target.value
    this.setState(oldState => this.exerciseChange(oldState, 'playfulness', value))
  }
  onTrainabilityChange(e) {
    this.setState({ trainability: e.target.value })
  }
  onBarkingChange(e) {
    this.setState({ barking: e.target.value })
  }

  onBreedSubmit(e) {
    e.preventDefault()
    const newBreed = {
      image: this.state.image,
      breed: this.state.breed,
      description: this.state.description,
      history: this.state.history,
      color: this.state.color,
      temperament: this.state.temperament,
      adaptability: {
        apartment: this.state.adaptability.apartment,
        owners: this.state.adaptability.owners,
        alone: this.state.adaptability.alone,
        weather: this.state.adaptability.weather,
        friendly: this.state.adaptability.friendly
      },
      exercise: {
        energy: this.state.exercise.energy,
        exercise: this.state.exercise.exercise,
        playfulness: this.state.exercise.playfulness
      },
      trainability: this.state.trainability,
      barking: this.state.barking
    }

    axios.post('http://localhost:5000/allbreeds', newBreed).then(res => console.log(res.data))
    this.setState({
      image: undefined,
      breed: '',
      description: '',
      history: '',
      color: '',
      temperament: '',
      adaptability: {
        apartment: 0,
        owners: 0,
        alone: 0,
        weather: 0,
        friendly: 0
      },
      exercise: {
        energy: 0,
        exercise: 0,
        playfulness: 0
      },
      trainability: 0,
      barking: ''
    })
  }

  render() {
    return (
      <BreedContainer>
        <Header>Include a new breed!</Header>
        <div>
          <form>
            <SubHeader>Image:</SubHeader>
            <Input type='text' value={this.state.image} onChange={this.onImageChange}></Input>
            <SubHeader>Breed:</SubHeader>
            <Input type='text' value={this.state.breed} onChange={this.onBreedChange}></Input>

            <SubHeader>Description:</SubHeader>
            <Input type='text' value={this.state.description} onChange={this.onDescriptionChange}></Input>
            <SubHeader>History:</SubHeader>
            <Input type='text' value={this.state.history} onChange={this.onHistoryChange}></Input>
            <SubHeader>Color:</SubHeader>
            <Input type='text' value={this.state.color} onChange={this.onColorChange}></Input>
            <SubHeader>Temperament:</SubHeader>
            <Input type='text' value={this.state.temperament} onChange={this.onTemperamentChange}></Input>
            <SubHeader>Trainability:</SubHeader>
            <Input
              type='number'
              min='0'
              max='100'
              value={this.state.trainability}
              onChange={this.onTrainabilityChange}
            ></Input>
            <SubHeader>Barking:</SubHeader>
            <Input type='text' value={this.state.barking} onChange={this.onBarkingChange}></Input>

            <SubContainer>
              <div>
                <Header>Adaptability</Header>
                <SubHeader>Apartment</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.apartment}
                  onChange={this.onApartmentChange}
                ></Input>
                <SubHeader>Owners</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.owners}
                  onChange={this.onOwnersChange}
                ></Input>
                <SubHeader>Alone</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.alone}
                  onChange={this.onAloneChange}
                ></Input>
                <SubHeader>Weather</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.apartmentweather}
                  onChange={this.onWeatherChange}
                ></Input>
                <SubHeader>Friendly</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.friendly}
                  onChange={this.onFriendlyChange}
                ></Input>
              </div>
              <div>
                <Header>Exercise</Header>
                <SubHeader>Energy</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.exercise.energy}
                  onChange={this.onEnergyChange}
                ></Input>
                <SubHeader>Exercise</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.exercise.exercise}
                  onChange={this.onExerciseChange}
                ></Input>
                <SubHeader>Playfylness</SubHeader>
                <Input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.exercise.playfulness}
                  onChange={this.onPlayfulnessChange}
                ></Input>
              </div>
            </SubContainer>
            <br></br>
            <Button type='submit' onClick={this.onBreedSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </BreedContainer>
    )
  }
}

export default IncludeBreed
