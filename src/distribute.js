import styled from 'styled-components'

const Distribute = styled.div`
  display: flex;
  align-items: flex-start;
  & > * {
    :not(:last-child) {
      ${props =>
        props.vertical
          ? 'margin-bottom:' + props.space * 8 + 'px'
          : 'margin-right:' + props.space * 8 + 'px'};
    }
  }

  padding-top: ${props => props.top * 8}px;
  padding-bottom: ${props => props.bottom * 8}px;
  padding-left: ${props => props.left * 8}px;
  padding-right: ${props => props.right * 8}px;
  ${props => (props.vertical ? 'flex-direction: column' : '')};
`

export default Distribute
