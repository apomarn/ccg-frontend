import React, { Component } from 'react'
import Hero from './Hero'
import Pups from './Pups'
import Footer from '../../components/Footer'
import { Container } from './styles'

class Landing extends Component {
  render() {
    return (
      <>
        <Hero />
        <Container>
          <Pups />
          <Footer />
        </Container>
      </>
    )
  }
}

export default Landing
