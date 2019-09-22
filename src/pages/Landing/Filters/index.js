import React, { Component } from 'react'
import { uniq } from 'lodash'
import { Container, FilterLogo, Description, FilterOptions, Form, Options, DropDown } from './styles'

class Filters extends Component {
  unduplicateValues(data) {
    const uniqueValues = []

    data.forEach(type => {
      if (!uniqueValues.includes(type)) {
        uniqueValues.push(type)
      }
    })

    return uniqueValues
  }

  renderOption(value) {
    return (
      <option key={value} value={value}>
        {value}
      </option>
    )
  }

  filterPetTypes() {
    const types = this.props.allPets.map(pet => pet.type)

    return (
      <>
        {this.unduplicateValues(types).map(type => {
          return this.renderOption(type)
        })}
      </>
    )
  }

  filterPetBreed() {
    const breeds = this.props.allPets.map(pet => pet.breed)

    return (
      <>
        {this.unduplicateValues(breeds).map(breed => {
          return this.renderOption(breed)
        })}
      </>
    )
  }

  filterPetGender() {
    const genders = this.props.allPets.map(pet => pet.gender)

    return (
      <>
        {uniq(genders).map(gender => {
          return this.renderOption(gender)
        })}
      </>
    )
  }

  render() {
    const { type, breed, gender, onChangeType, onChangeBreed, onChangeGender } = this.props

    return (
      <Container>
        <FilterLogo src="../images/filter.jpg" alt="filter-logo" />
        <Description>Filter By:</Description>
        <FilterOptions>
          <Form>
            <Options>PET TYPE</Options>
            <DropDown onChange={onChangeType} value={type}>
              <option value="All">All</option>
              {this.filterPetTypes()}
            </DropDown>
            <Options>BREED</Options>
            <DropDown onChange={onChangeBreed} value={breed}>
              <option value="All">All</option>
              {this.filterPetBreed()}
            </DropDown>
            <Options>GENDER</Options>
            <DropDown onChange={onChangeGender} value={gender}>
              <option value="All">All</option>
              {this.filterPetGender()}
            </DropDown>
          </Form>
        </FilterOptions>
      </Container>
    )
  }
}

export default Filters
