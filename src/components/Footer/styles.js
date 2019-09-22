import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-bottom: 50px;
  justify-content: space-between;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LocationLogo = styled.img`
  height: 30px;
  width: 30px;
`

export const Header = styled.p`
  margin: 0;
  margin-top: 10px;
  text-align: center;
  font-weight: 700;
`

export const Information = styled.p`
  margin: 0;
  margin-top: 10px;
  text-align: center;
`

export const Divider = styled.div`
  height: 3px;
  width: 150px;
  background-color: gray;
  margin-top: 10px;
  align-self: center;
`
