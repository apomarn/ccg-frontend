import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`

export const List = styled(Link)`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
  text-decoration: none;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`
