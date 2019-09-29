import styled from 'styled-components'

export const Container = styled.div`
  background-color: gray;
  display: flex;
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
  margin-left: 20px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: 100px;
    flex-wrap: wrap;
  }
`

export const Options = styled.p`
  margin-right: 10px;
`

export const DropDown = styled.select`
  width: 100px;
  margin-right: 30px;
  background-color: white;
`
