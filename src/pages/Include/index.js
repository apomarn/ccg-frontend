import React, { Component } from 'react'
import Hero from '../Landing/Hero'
import IncludePup from './IncludePup'
import IncludeBreed from './IncludeBreed'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`

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
