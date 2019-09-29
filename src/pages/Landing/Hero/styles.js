import styled from 'styled-components'

export const Container = styled.div`
  background: url('../../images/hero.jpg') no-repeat center;
  background-size: cover;
  height: 580px;
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    background: url('../../images/hero.jpg') no-repeat;
  }
`
