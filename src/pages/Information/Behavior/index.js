import React, { Component } from 'react'

class Behavior extends Component {
  render() {
    const { temperament, barking, adaptability, exercise, trainability } = this.props
    return (
      <div>
        <h2>Behavior</h2>
        <div>
          <div>
            <p>Temperament:</p>
            <p>{temperament}</p>
            <p>Barking</p>
            <p>{barking}</p>
          </div>
          <div>
            <h2>Adaptability</h2>
            <p>Adaptability to apartment living</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${adaptability.apartment}`, backgroundColor: 'red' }}></div>
            </div>
            <p>Good for novice owners</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${adaptability.owners}`, backgroundColor: 'red' }}></div>
            </div>
            <p>Tolerates being alone</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${adaptability.alone}`, backgroundColor: 'red' }}></div>
            </div>
            <p>Tolerates cold weather</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${adaptability.weather}`, backgroundColor: 'red' }}></div>
            </div>
            <p>Family Friendly</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${adaptability.friendly}`, backgroundColor: 'red' }}></div>
            </div>
          </div>
          <div>
            <h2>Exercise needs</h2>
            <p>Energy level</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${exercise.energy}`, backgroundColor: 'red' }}></div>
            </div>
            <p>Exercise needs</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${exercise.exercise}`, backgroundColor: 'red' }}></div>
            </div>
            <p>Playfulness</p>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${exercise.playfulness}`, backgroundColor: 'red' }}></div>
            </div>
            <h2>Trainability</h2>
            <div style={{ backgroundColor: 'lightgray', height: '50px', width: '100%' }}>
              <div style={{ height: '20px', width: `${trainability}`, backgroundColor: 'red' }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Behavior
