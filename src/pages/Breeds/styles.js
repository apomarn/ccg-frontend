import styled from 'styled-components'

export const Body = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  @media screen and (min-width: 768px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`

export const Title = styled.p`
  background-color: lightblue;
  color: white;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 20px;
  margin: 0;
  width: 300px;
  position: absolute;
  bottom: 35px;
  margin-left: 50px;
`
export const DescriptionContainer = styled.div`
  margin: 110px 0;

  @media screen and (min-width: 768px) {
    margin: 40px 0;
  }
`

export const Description = styled.p`
  font-weight: 700;
  font-size: 20px;
  padding-top: 20px;
  margin: 0;
  text-indent: 25px;
  margin-left: 10px;
  color: gray;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const AllPets = styled.div`
  display: flex;
  flex-direction: column;
  background-color: offwhite;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 60px;
    background-color: offwhite;
  }
`
