import React from 'react'
import styled from 'styled-components'
import componentStories from './component-stories'
import { boolean, select, number } from '@storybook/addon-knobs'
import Layout from '../src/layout'
import Input from '../src/input'
import Button from '../src/button'
import Text from '../src/text'
import { orangeLight, orangeLighter } from '../src/variables'

const BigHeight = styled.div`height: 100vh;`

const BackgroundComponent = styled.div`
  height: 100%;
  background-color: ${props =>
    props.background === 'light' ? orangeLight : orangeLighter};
`

const Highlighted = background => {
  return Component => {
    return () =>
      <BackgroundComponent background={background}>
        <Component />
      </BackgroundComponent>
  }
}

const Light = Highlighted('light')
const Lighter = Highlighted('lighter')

const PrimaryButton = () => <Button primary>Primary Button</Button>
const RenderedText = () => <Text size='size2'>unit. design system</Text>

componentStories.addWithJSX('Layout', () => {
  const contentComponentName = select(
    'content.componentName',
    {
      LightInput: 'Input',
      LightButton: 'Button',
      LightText: 'Text'
    },
    'LightInput'
  )

  const panelComponentName = select(
    'panel.componentName',
    {
      LighterInput: 'Input',
      LighterButton: 'Button',
      LighterText: 'Text'
    },
    'LighterButton'
  )

  const position = select(
    'panel.position',
    ['top', 'bottom', 'left', 'right'],
    'left'
  )
  const size = select(
    'panel.size',
    ['small', 'medium', 'large', 'auto'],
    'medium'
  )
  const showBorder = boolean('panel.showBorder', true)
  const space = number('space', 1)

  return (
    <BigHeight>
      <Layout
        availableComponents={{
          LightInput: Light(Input),
          LightButton: Light(PrimaryButton),
          LightText: Light(RenderedText),
          LighterInput: Lighter(Input),
          LighterButton: Lighter(PrimaryButton),
          LighterText: Lighter(RenderedText)
        }}
        content={{
          componentName: contentComponentName
        }}
        panel={{
          componentName: panelComponentName,
          position,
          size,
          showBorder
        }}
        space={space}
      />
    </BigHeight>
  )
})
