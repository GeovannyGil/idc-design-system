import React from 'react'
import { Spacer } from './Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer
}

const Template = (args) => <Spacer {...args} />

export const Default = Template.bind({})

Default.args = {
  size: 4,
  isVisible: true
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  size: 4,
  isVisible: true,
  type: 'horizontal'
}

export const Vertical = Template.bind({})

Vertical.args = {
  size: 4,
  isVisible: true,
  type: 'vertical'
}
