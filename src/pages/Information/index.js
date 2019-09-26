import React, { Component } from 'react'
import Biography from './Biography'
import Behavior from './Behavior'
import Footer from '../../components/Footer'
import Hero from '../Landing/Hero'
import { Body } from './styles'

class Information extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Body>
          <Biography {...this.props} />
          <Behavior {...this.props} />
        </Body>
        <Footer />
      </div>
    )
  }
}

export default Information
