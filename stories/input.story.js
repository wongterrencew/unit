import React from 'react'
import componentStories from './component-stories'
import { text, select } from '@storybook/addon-knobs'
import Input from '../src/input'

componentStories.addWithJSX('Input', () => {
  const label = text('label', 'label')
  const size = select('size', ['small', 'medium', 'large', 'full'], 'medium')
  return <Input type='text' label={label} size={size} />
})
