import React from 'react'
import { Status } from './Status'

export default {
  title: 'Component/Status',
  component: Status
}

const Template = (args) => <Status {...args} />

export const Default = Template.bind({})

Default.args = {
  color: 'green',
  state: 'Active'
}
