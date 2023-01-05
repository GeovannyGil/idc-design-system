import React from 'react'
import { Badge } from './Badge'

export default {
  title: 'Component/Badge',
  component: Badge
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Badge'
}
