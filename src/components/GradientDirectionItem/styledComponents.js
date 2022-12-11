// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 45%;

  @media screen and(min-width: 768px) {
    width: 26%;
  }
`
export const DirectionButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
