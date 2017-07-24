import React from 'react'
import styled, { css } from 'styled-components'
import Width from './width'
import { orange, unit } from './variables'

const SIZE_TO_UNITS = {
  small: `${16 * unit}px;`,
  medium: `${32 * unit}px;`,
  large: `${48 * unit}px;`,
  auto: 'auto'
}

const BORDER_WIDTH = {
  top: '0 0 1px 0',
  bottom: '1px 0 0 0',
  left: '0 1px 0 0',
  right: '0 0 0 1px'
}

const FLIPPED_POSITIONS = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
}

const getWidthForSize = size => WIDTH[size]
const getBorderWidthForPosition = position => BORDER_WIDTH[position]
const getPanelMargin = (position, space) => {
  const flippedPosition = FLIPPED_POSITIONS[position]
  return `margin-${flippedPosition}: ${space * unit}px;`
}

const shouldRenderPanelFirst = panel => panel === 'top' || panel === 'left'
const shouldHaveVerticalLayout = panel => panel === 'top' || panel === 'bottom'

const LayoutWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  flex-direction: ${props => (props.vertical ? 'column' : '')};
`

const Panel = styled.div`
  box-sizing: border-box;

  ${props => getPanelMargin(props.position, props.space)} ${props =>
      shouldHaveVerticalLayout(props.position)
        ? css`
      height: ${props => SIZE_TO_UNITS[props.size]};
    `
        : css`
      width: ${props => SIZE_TO_UNITS[props.size]};
    `} ${props =>
      props.showBorder &&
      css`
    border-width: ${props => getBorderWidthForPosition(props.position)};
    border-style: solid;
    border-color: ${orange};
  `};
`

const Content = styled.div`flex: 1;`

const Layout = ({ availableComponents, panel, content, space }) => {
  const {
    componentName: panelComponentName,
    props: panelProps = {},
    position,
    size,
    showBorder
  } = panel
  const {
    componentName: contentComponentName,
    props: contentProps = {}
  } = content
  const PanelComponent = availableComponents[panelComponentName]
  const ContentComponent = availableComponents[contentComponentName]

  const renderedPanel = (
    <Panel
      position={position}
      size={size}
      showBorder={showBorder}
      space={space}
    >
      <PanelComponent {...panelProps} />
    </Panel>
  )

  const renderedContent = (
    <Content>
      <ContentComponent {...contentProps} />
    </Content>
  )
  return shouldRenderPanelFirst(position)
    ? <LayoutWrapper vertical={shouldHaveVerticalLayout(position)}>
        {renderedPanel}
        {renderedContent}
      </LayoutWrapper>
    : <LayoutWrapper vertical={shouldHaveVerticalLayout(position)}>
        {renderedContent}
        {renderedPanel}
      </LayoutWrapper>
}

export default Layout
