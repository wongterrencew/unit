import React from 'react'
import styled, { css } from 'styled-components'
import { unit, orange, orangeLight } from './variables'

const STYLES = {
  small: css`
    width: ${16 * unit}px;
  `,
  medium: css`
    width: ${32 * unit}px;
  `,
  large: css`
    width: ${48 * unit}px;
  `,
  full: css`
    width: 100%;
  `
}

const InputLabel = styled.div`margin-bottom: ${unit}px;`

const InputField = styled.input`
  box-sizing: border-box;
  height: ${5 * unit}px;
  padding: 0 ${1.5 * unit}px;
  border: 1px solid ${orangeLight};
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  color: inherit;

  ${props => STYLES[props.size]} :focus {
    border-color: ${orange};
    outline: none;
  }

  ::placeholder {
    color: inherit;
    opacity: 0.54;
  }
`

const Input = ({ className, size = 'medium', label, ...rest }) => {
  const inputField = <InputField size={size} {...rest} placeholder='input' />
  return label
    ? <div className={className}>
        <InputLabel>
          {label}
        </InputLabel>
        {inputField}
      </div>
    : inputField
}

export default Input
