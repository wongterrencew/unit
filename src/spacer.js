import styled, { css } from 'styled-components'
import { unit } from './variables'

const Spacer = styled.div`
  ${props =>
    props.inline &&
    css`
    display: inline-block;
  `} ${props =>
      props.top &&
      css`
    margin-top: ${props.top * unit}px;
  `} ${props =>
      props.right &&
      css`
    margin-right: ${props.right * unit}px;
  `} ${props =>
      props.left &&
      css`
    margin-left: ${props.left * unit}px;
  `} ${props =>
      props.bottom &&
      css`
    margin-bottom: ${props.bottom * unit}px;
  `};
`

export default Spacer
