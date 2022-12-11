// Write your code here

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, isActive, changeGradientDirection} = props
  const {displayText, value} = gradientDetails

  const onClickDirectionBtn = () => {
    changeGradientDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickDirectionBtn}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
