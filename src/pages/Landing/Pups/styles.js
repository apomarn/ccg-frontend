import styled from 'styled-components'

export const Container = styled.div`
  background-color: gray;
  display: flex;
`

export const Header = styled.h3`
  color: gray;
  font-weight: 700;
  margin: 0;
  font-size: 40px;
`
export const SecondHeader = styled.h1`
  color: gray;
  font-weight: 700;
  margin: 0;
  font-size: 70px;
  margin-bottom: 20px;
`

export const FilterLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 20px;
`
export const Description = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-right: 40px;
`
export const FilterOptions = styled.div`
  color: white;
  font-size: 16px;
  display: flex;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 100px;
  flex-wrap: wrap;
`

export const Options = styled.p`
  margin-right: 10px;
`

export const DropDown = styled.select`
  width: 100px;
  margin-right: 30px;
`

export const PetContainer = styled.div`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  padding: 10px;
`

export const NoMatch = styled.div`
  border: 1px solid blue;
  background-color: lightblue;
  color: blue;
  text-align: center;
  border-radius: 25px;
  margin: 30px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: beige;
`
