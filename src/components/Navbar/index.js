import React, { Component } from 'react'
import { Container, Logo, List } from './styles'

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Logo src='../../images/logo.png' alt='logo'></Logo>
        <List to='/'>AVAILABLE PUPPIES</List>
        <List to='/breeds'>BREEDS</List>
      </Container>
    )
  }
}

export default Navbar
