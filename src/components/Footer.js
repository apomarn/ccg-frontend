import React, { Component } from 'react'
import styled from 'styled-components'

const store = [
  {
    location: 'PEMBROKE PINES',
    address: '356 N University Drive Pembroke Pines, FL 33024',
    openhours: '10:00 am - 9:00 pm'
  },
  {
    location: 'PLANTATION',
    address: '801 South University Drive Suite #C-106 Plantation, FL 33324',
    openhours: '10:00 am - 9:00 pm'
  },
  {
    location: 'DAVIE',
    address: '11482 W State Road 84 Davie, FL 33325',
    openhours: '10:00 am - 9:00 pm'
  },
  {
    location: 'KENDALL',
    address: '8236 Mills Drive Miami, FL 33183',
    openhours: '10:00 am - 9:00 pm'
  },
  {
    location: 'LARGO',
    address: '10289 Ulmerton Rd Largo, FL 33771',
    openhours: '10:00 am - 9:00 pm'
  }
]

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-bottom: 50px;
  justify-content: space-between;
`
const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const LocationLogo = styled.img`
  height: 30px;
  width: 30px;
`

const Header = styled.p`
  margin: 0;
  margin-top: 10px;
  text-align: center;
  font-weight: 700;
`

const Information = styled.p`
  margin: 0;
  margin-top: 10px;
  text-align: center;
`
const Divider = styled.div`
  height: 3px;
  width: 150px;
  background-color: gray;
  margin-top: 10px;
  align-self: center;
`

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        {store.map(store => {
          return (
            <Container key={store.location}>
              <LocationContainer>
                <LocationLogo src='../images/location.png' alt='location-logo' />
                <Header>{store.location}</Header>
              </LocationContainer>
              <Information>{store.address}</Information>
              <Divider />
              <Information>Monday - Sunday</Information>
              <Information>{store.openhours}</Information>
            </Container>
          )
        })}
      </Wrapper>
    )
  }
}

export default Footer
