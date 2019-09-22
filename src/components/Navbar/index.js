import React, { Component } from 'react'
import { Container, Logo, List } from './styles'

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Logo src="../../images/logo.png" alt="logo"></Logo>
        <List href="#">AVAILABLE PUPPIES</List>
        <List href="#">PERKS</List>
        <List href="#">BREEDS</List>
        <List href="#">PRODUCTS</List>
        <List href="#">CARES</List>
        <List href="#">FINANCING</List>
        <List href="#">ABOUT</List>
        <List href="#">CONTACT</List>
      </Container>
    )
  }
}

export default Navbar
