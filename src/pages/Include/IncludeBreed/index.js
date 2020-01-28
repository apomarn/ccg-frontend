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
        apartment: '',
        owners: '',
        alone: '',
        weather: '',
        friendly: ''
      },
      exercise: {
        energy: '',
        exercise: '',
        playfulness: ''
      },
      trainability: '',
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
    this.setState({ apartment: e.target.value })
  }
  onOwnersChange(e) {
    this.setState({ owners: e.target.value })
  }
  onAloneChange(e) {
    this.setState({ alone: e.target.value })
  }
  onWeatherChange(e) {
    this.setState({ Wwather: e.target.value })
  }
  onFriendlyChange(e) {
    this.setState({ friendly: e.target.value })
  }
  onEnergyChange(e) {
    this.setState({ energy: e.target.value })
  }
  onExerciseChange(e) {
    this.setState({ exercise: e.target.value })
  }
  onPlayfulnessChange(e) {
    this.setState({ playfulness: e.target.value })
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
        apartment: this.state.apartment,
        owners: this.state.owners,
        alone: this.state.alone,
        weather: this.state.weather,
        friendly: this.state.friendly
      },
      exercise: {
        energy: this.state.energy,
        exercise: this.state.exercise,
        playfulness: this.state.playfulness
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
        apartment: '',
        owners: '',
        alone: '',
        weather: '',
        friendly: ''
      },
      exercise: {
        energy: '',
        exercise: '',
        playfulness: ''
      },
      trainability: '',
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
            <p>Color:</p>
            <input type='text' value={this.state.color} onChange={this.onColorChange}></input>
            <p>Temperament:</p>
            <input type='text' value={this.state.temperament} onChange={this.onTemperamentChange}></input>
            <div>
              <div>
                <p>Adaptability</p>
                <p>Apartment</p>
                <input type='text' value={this.state.apartment} onChange={this.onApartmentChange}></input>
                <p>Owners</p>
                <input type='text' value={this.state.owners} onChange={this.onOwnersChange}></input>
                <p>Alone</p>
                <input type='text' value={this.state.alone} onChange={this.onAloneChange}></input>
                <p>Weather</p>
                <input type='text' value={this.state.weather} onChange={this.onWeatherChange}></input>
                <p>Friendly</p>
                <input type='text' value={this.state.friendly} onChange={this.onFriendlyChange}></input>
              </div>
              <div>
                <p>Exercise</p>
                <p>Energy</p>
                <input type='text' value={this.state.energy} onChange={this.onEnergyChange}></input>
                <p>Exercise</p>
                <input type='text' value={this.state.exercise} onChange={this.onExerciseChange}></input>
                <p>Playfylness</p>
                <input type='text' value={this.state.playfylness} onChange={this.onPlayfylnessChange}></input>
              </div>
            </div>
            <p>Trainability:</p>
            <input type='text' value={this.state.trainability} onChange={this.onTrainabilityChange}></input>
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
