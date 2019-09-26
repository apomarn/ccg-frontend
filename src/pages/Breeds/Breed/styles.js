import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 250px;
  text-decoration: none;
`

export const Image = styled.img`
  width: 250px;
  height: 250px;
`

export const BreedName = styled.p`
  text-transform: uppercase;
  color: white;
  background-color: lightblue;
  padding: 20px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`
export const DescriptionContainer = styled.div`
  position: relative;
`

export const Description = styled.p`
  color: black;
  text-indent: 15px;
  margin: 0;
  padding: 10px;
  border-left: 2px solid lightblue;
  border-right: 2px solid lightblue;
  border-bottom: 2px solid lightblue;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 150px;
`

export const PlusContainer = styled.div`
  background-color: lightblue;
  height: 40px;
  border-radius: 50%;
  width: 17%;
  position: absolute;
  right: 0;
  bottom: 0px;
`

export const Plus = styled.p`
  color: black;
  margin: 0;
  text-align: center;
  padding-top: 10px;
`
