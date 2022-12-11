import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorMainContainer,
  GradientResponsiveContainer,
  Heading,
  DescriptionDirection,
  GradientButtonList,
  ColorsHeading,
  ColorPickerContainer,
  FromColor,
  CustomInput,
  CustomInputColorContainer,
  GenerateButtonContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirectionBtn: gradientDirectionsList[0].value,
    fromInputColor: ' #8ae323',
    toInputColor: '#014f7b',
    gradientValue: ` ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerateColor = () => {
    const {
      fromInputColor,
      toInputColor,
      activeGradientDirectionBtn,
    } = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirectionBtn}, ${fromInputColor}, ${toInputColor}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromInputColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toInputColor: event.target.value})
  }

  changeGradientDirection = direction => {
    this.setState({activeGradientDirectionBtn: direction})
  }

  render() {
    const {
      activeGradientDirectionBtn,
      fromInputColor,
      toInputColor,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorMainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <GradientResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DescriptionDirection>Choose Direction</DescriptionDirection>
          <GradientButtonList>
            {gradientDirectionsList.map(eachDirectionItem => (
              <GradientDirectionItem
                key={eachDirectionItem.directionId}
                gradientDetails={eachDirectionItem}
                isActive={
                  activeGradientDirectionBtn === eachDirectionItem.value
                }
                changeGradientDirection={this.changeGradientDirection}
              />
            ))}
          </GradientButtonList>
          <ColorsHeading>Pick the Colors</ColorsHeading>

          <ColorPickerContainer>
            <CustomInputColorContainer>
              <FromColor>{fromInputColor}</FromColor>
              <CustomInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromInputColor}
              />
            </CustomInputColorContainer>
            <CustomInputColorContainer>
              <FromColor>{toInputColor}</FromColor>
              <CustomInput
                type="color"
                onChange={this.onChangeToColor}
                value={toInputColor}
              />
            </CustomInputColorContainer>
          </ColorPickerContainer>
          <GenerateButtonContainer onClick={this.onClickGenerateColor}>
            Generate
          </GenerateButtonContainer>
        </GradientResponsiveContainer>
      </GradientGeneratorMainContainer>
    )
  }
}

export default GradientGenerator
