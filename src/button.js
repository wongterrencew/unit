import styled from 'styled-components'
import { unit, orange, orangeLight, orangeLighter, white } from './variables'

const Button = styled.button`
  display: inline-block;
  border: 0;
  background-color: ${props => (props.primary ? orange : orangeLighter)};
  color: ${props => (props.primary ? white : 'inherit')};
  padding: ${unit}px ${2 * unit}px;
  font: inherit;
  cursor: pointer;

  :focus {
    outline: 0;
    box-shadow: 0 0 ${unit}px 0 ${orangeLight};
  }
`

export default Button
