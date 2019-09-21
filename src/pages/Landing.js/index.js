import React, { Component } from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import AvailablePups from './Pups'
import Footer from '../../components/Footer'

const Container = styled.div`
  margin: 20px 100px;
`
class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Container>
          <AvailablePups />
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Landing
