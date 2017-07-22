import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'
import Typography from '../src/typography'

setAddon(JSXAddon)

const componentStories = storiesOf('Components', module)

componentStories.addDecorator(withKnobs).addDecorator(storyFn =>
  <Typography>
    {storyFn()}
  </Typography>
)

export default componentStories
