import styled from 'styled-components'

export const Body = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 60px;
    flex-direction: row;
  }
`

export const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  height: auto;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    width: 350px;
    height: 350px;
  }
`

export const BreedName = styled.p`
  font-size: 40px;
  text-transform: uppercase;
  weight: 700;
  margin: 0;
  margin-top: 20px;
  color: lightblue;
`

export const Div = styled.div`
  height: 5px;
  width: 100%;
  background-color: lightblue;
`

export const Subtitle = styled.p`
  color: black;
  font-weight: 700;
`

export const Description = styled.p`
  text-indent: 25px;
  color: grey;
`
