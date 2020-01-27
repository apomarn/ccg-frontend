import React, { Component } from 'react'
import Hero from '../Landing/Hero'
import IncludePup from './IncludePup'
import IncludeBreed from './IncludeBreed'

class Include extends Component {
  render() {
    return (
      <>
        <Hero />
        <IncludePup />
        <IncludeBreed />
      </>
    )
  }
}

export default Include
