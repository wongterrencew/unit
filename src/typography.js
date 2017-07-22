import styled from 'styled-components'
import { defaultFontFamily, unit, orange } from './variables'

const Typography = styled.div`
  font-size: 14px;
  line-height: {3 * unit}px;
  font-family: ${defaultFontFamily};
  color: ${orange};
`

export default Typography
