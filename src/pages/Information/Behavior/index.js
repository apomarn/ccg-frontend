import React, { Component } from 'react'
import { Header, Title, Divs, EachDiv, Description, ProgressDiv, Progress } from './styles'

class Behavior extends Component {
  render() {
    const { temperament, barking, adaptability, exercise, trainability } = this.props
    return (
      <>
        <Header>Behavior</Header>
        <Divs>
          <EachDiv>
            <Title>Temperament:</Title>
            <Description>{temperament}</Description>
            <Title>Barking</Title>
            <Description>{barking}</Description>
          </EachDiv>
          <EachDiv>
            <Title>Adaptability</Title>
            <Description>Adaptability to apartment living</Description>
            <ProgressDiv>
              <Progress style={{ width: `${adaptability.apartment}` }}>{adaptability.apartment}</Progress>
            </ProgressDiv>
            <Description>Good for novice owners</Description>
            <ProgressDiv>
              <Progress style={{ width: `${adaptability.owners}` }}>{adaptability.owners}</Progress>
            </ProgressDiv>
            <Description>Tolerates being alone</Description>
            <ProgressDiv>
              <Progress style={{ width: `${adaptability.alone}` }}>{adaptability.alone}</Progress>
            </ProgressDiv>
            <Description>Tolerates cold weather</Description>
            <ProgressDiv>
              <Progress style={{ width: `${adaptability.weather}` }}>{adaptability.weather}</Progress>
            </ProgressDiv>
            <Description>Family Friendly</Description>
            <ProgressDiv>
              <Progress style={{ width: `${adaptability.friendly}` }}>{adaptability.friendly}</Progress>
            </ProgressDiv>
          </EachDiv>
          <EachDiv>
            <Title>Exercise needs</Title>
            <Description>Energy level</Description>
            <ProgressDiv>
              <Progress style={{ width: `${exercise.energy}` }}>{exercise.energy}</Progress>
            </ProgressDiv>
            <Description>Exercise needs</Description>
            <ProgressDiv>
              <Progress style={{ width: `${exercise.exercise}` }}>{exercise.exercise}</Progress>
            </ProgressDiv>
            <Description>Playfulness</Description>
            <ProgressDiv>
              <Progress style={{ width: `${exercise.playfulness}` }}>{exercise.playfulness}</Progress>
            </ProgressDiv>
            <Title>Trainability</Title>
            <ProgressDiv>
              <Progress style={{ width: `${trainability}` }}>{trainability}</Progress>
            </ProgressDiv>
          </EachDiv>
        </Divs>
      </>
    )
  }
}

export default Behavior
