import React from 'react'
import componentStories from './component-stories'
import { boolean } from '@storybook/addon-knobs'
import Button from '../src/button'

componentStories.addWithJSX('Button', () => {
  const primary = boolean('primary', true)
  return <Button primary={primary}>unit. design system</Button>
})
