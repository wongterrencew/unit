import React from 'react'
import styled from 'styled-components'
import { orange } from '../src/variables'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Typography from '../src/typography'
import Text from '../src/text'
import Button from '../src/button'
import Spacer from '../src/spacer'

const stories = storiesOf('All Components Demo', module)

stories.addDecorator(withKnobs).add('demo', () => {
  return (
    <Typography>
      <Spacer bottom={2}>
        <Text size='size3'>40/48 - size3</Text>
      </Spacer>
      <Spacer bottom={2}>
        <Text size='size2'>32/40 - size2</Text>
      </Spacer>
      <Spacer bottom={2}>
        <Text size='size1'>24/32 - size1</Text>
      </Spacer>
      <Spacer bottom={2}>
        <Text size='size0'>14/24 - size0</Text>
      </Spacer>
      <Spacer bottom={2}>
        <Spacer inline right={1}>
          <Button primary>Primary button</Button>
        </Spacer>
        <Button>Button</Button>
      </Spacer>
    </Typography>
  )
})
