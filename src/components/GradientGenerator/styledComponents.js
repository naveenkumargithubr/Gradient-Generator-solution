// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const GradientResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 550px;
  @media screen and(min-width: 768px) {
    width: 85%;
    max-width: 1200px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 28px;
  color: #ffffff;
`
export const DescriptionDirection = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`
export const GradientButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 420px;
  }
`

export const ColorsHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  justify-content: space-around;
  max-width: 350px;
`

export const FromColor = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 84px;
  background-color: transparent;
`

export const CustomInputColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GenerateButtonContainer = styled.button`
  height: 40px;
  width: 110px;
  margin-top: 30px;
  background-color: skyblue;
  padding: 8px 12px 8px 12px;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  color: #000000;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-left: 0px;
`
