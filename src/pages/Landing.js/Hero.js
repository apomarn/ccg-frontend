import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  background-image: url('../images/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 580px;
`

class Hero extends Component {
  render() {
    return (
      <Container>
        <Navbar />
      </Container>
    )
  }
}

export default Hero
