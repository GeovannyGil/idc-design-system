import React from 'react'
import { Icon } from './Icon'

export default {
  title: 'Component/Icon',
  component: Icon
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  type: 'loader'
}
