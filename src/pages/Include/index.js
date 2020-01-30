import React, { Component } from 'react'
import Hero from '../Landing/Hero'
import IncludePup from './IncludePup'
import IncludeBreed from './IncludeBreed'
import { Container } from './styles'

class Include extends Component {
  render() {
    return (
      <>
        <Hero />
        <Container>
          <IncludePup />
          <IncludeBreed />
        </Container>
      </>
    )
  }
}

export default Include
