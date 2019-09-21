import React, { Component } from 'react'
import styled from 'styled-components'

fetch('http://localhost:5000/allpets')
  .then(data => data.json())
  .then(pets => {
    console.log(pets)
  })

const Container = styled.div`
  background-color: gray;
  display: flex;
`

const Header = styled.h3`
  color: gray;
  font-weight: 700;
  margin: 0;
  font-size: 40px;
`
const SecondHeader = styled.h1`
  color: gray;
  font-weight: 700;
  margin: 0;
  font-size: 70px;
  margin-bottom: 20px;
`

const FilterLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 20px;
`
const Description = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-right: 40px;
`
const FilterOptions = styled.div`
  color: white;
  font-size: 16px;
  display: flex;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 100px;
  flex-wrap: wrap;
`

const Options = styled.p`
  margin-right: 10px;
`

const DropDown = styled.select`
  width: 100px;
  margin-right: 30px;
`

class AvailablePups extends Component {
  render() {
    return (
      <div>
        <Header>AVAILABLE</Header>
        <SecondHeader>PUPPIES</SecondHeader>
        <Container>
          <FilterLogo src='../images/filter.jpg' alt='filter-logo' />
          <Description>Filter By:</Description>
          <FilterOptions>
            <Form>
              <Options>PET TYPE</Options>
              <DropDown>
                <option></option>
              </DropDown>
              <Options>BREED</Options>
              <DropDown>
                <option></option>
              </DropDown>
              <Options>GENDER</Options>
              <DropDown>
                <option>All Genders</option>
                <option>Female</option>
                <option>Male</option>
              </DropDown>
            </Form>
          </FilterOptions>
        </Container>
      </div>
    )
  }
}

export default AvailablePups
