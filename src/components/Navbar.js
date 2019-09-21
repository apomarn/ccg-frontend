import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const List = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  text-decoration: none;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Logo src='../images/logo.png' alt='logo'></Logo>
        <List href='#'>AVAILABLE PUPPIES</List>
        <List href='#'>PERKS</List>
        <List href='#'>BREEDS</List>
        <List href='#'>PRODUCTS</List>
        <List href='#'>CARES</List>
        <List href='#'>FINANCING</List>
        <List href='#'>ABOUT</List>
        <List href='#'>CONTACT</List>
      </Container>
    )
  }
}

export default Navbar
