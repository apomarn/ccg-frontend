import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`

export const List = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
  }
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`
