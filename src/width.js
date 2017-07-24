import styled, { css } from 'styled-components'
import { unit } from './variables'

const STYLES = {
  small: css`
    width: ${16 * unit}px;
  `,
  medium: css`
    width: ${32 * unit}px;
  `,
  large: css`
    width: ${48 * unit}px;
  `
}

const Width = styled.div`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  ${props => STYLES[props.size]};
`

export default Width
