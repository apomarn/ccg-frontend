import React, { Component } from 'react'
import axios from 'axios'

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
      <div>
        <p>Include a new breed</p>
        <div>
          <form>
            <p>Image:</p>
            <input type='text' value={this.state.image} onChange={this.onImageChange}></input>
            <p>Breed:</p>
            <input type='text' value={this.state.breed} onChange={this.onBreedChange}></input>
            <p>Description:</p>
            <input type='text' value={this.state.description} onChange={this.onDescriptionChange}></input>
            <p>History:</p>
            <input type='text' value={this.state.history} onChange={this.onHistoryChange}></input>
            <p>Color:</p>
            <input type='text' value={this.state.color} onChange={this.onColorChange}></input>
            <p>Temperament:</p>
            <input type='text' value={this.state.temperament} onChange={this.onTemperamentChange}></input>
            <div>
              <div>
                <p>Adaptability</p>
                <p>Apartment</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.apartment}
                  onChange={this.onApartmentChange}
                ></input>
                <p>Owners</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.owners}
                  onChange={this.onOwnersChange}
                ></input>
                <p>Alone</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.alone}
                  onChange={this.onAloneChange}
                ></input>
                <p>Weather</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.apartmentweather}
                  onChange={this.onWeatherChange}
                ></input>
                <p>Friendly</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.adaptability.friendly}
                  onChange={this.onFriendlyChange}
                ></input>
              </div>
              <div>
                <p>Exercise</p>
                <p>Energy</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.exercise.energy}
                  onChange={this.onEnergyChange}
                ></input>
                <p>Exercise</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.exercise.exercise}
                  onChange={this.onExerciseChange}
                ></input>
                <p>Playfylness</p>
                <input
                  type='number'
                  min='0'
                  max='100'
                  value={this.state.exercise.playfulness}
                  onChange={this.onPlayfulnessChange}
                ></input>
              </div>
            </div>
            <p>Trainability:</p>
            <input
              type='number'
              min='0'
              max='100'
              value={this.state.trainability}
              onChange={this.onTrainabilityChange}
            ></input>
            <p>Barking:</p>
            <input type='text' value={this.state.barking} onChange={this.onBarkingChange}></input>
            <br></br>
            <button type='submit' onClick={this.onBreedSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default IncludeBreed
