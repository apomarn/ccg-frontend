import React, { Component } from 'react'
import { Wrapper, Container, LocationContainer, LocationLogo, Header, Information, Divider } from './styles'

const stores = [
  {
    location: 'PEMBROKE PINES',
    address: '356 N University Drive Pembroke Pines, FL 33024',
    openHours: '10:00 am - 9:00 pm'
  },
  {
    location: 'PLANTATION',
    address: '801 South University Drive Suite #C-106 Plantation, FL 33324',
    openHours: '10:00 am - 9:00 pm'
  },
  {
    location: 'DAVIE',
    address: '11482 W State Road 84 Davie, FL 33325',
    openHours: '10:00 am - 9:00 pm'
  },
  {
    location: 'KENDALL',
    address: '8236 Mills Drive Miami, FL 33183',
    openHours: '10:00 am - 9:00 pm'
  },
  {
    location: 'LARGO',
    address: '10289 Ulmerton Rd Largo, FL 33771',
    openHours: '10:00 am - 9:00 pm'
  }
]

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        {stores.map(store => {
          return (
            <Container key={store.location}>
              <LocationContainer>
                <LocationLogo src="../images/location.png" alt="location-logo" />
                <Header>{store.location}</Header>
              </LocationContainer>
              <Information>{store.address}</Information>
              <Divider />
              <Information>Monday - Sunday</Information>
              <Information>{store.openHours}</Information>
            </Container>
          )
        })}
      </Wrapper>
    )
  }
}

export default Footer
