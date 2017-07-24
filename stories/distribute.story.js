import React from 'react'
import componentStories from './component-stories'
import { boolean, number } from '@storybook/addon-knobs'
import Distribute from '../src/distribute'
import Button from '../src/button'
import Input from '../src/input'

componentStories.addWithJSX('Distribute', () => {
  const space = number('space', 1)
  const vertical = boolean('vertical', false)

  return (
    <Distribute space={space} vertical={vertical}>
      <Input type='text' />
      <Button primary>Search</Button>
    </Distribute>
  )
})
