import React from 'react'
import { Textarea } from './Textarea'

export default {
  title: 'Component/Textarea',
  component: Textarea
}

const Template = (args) => <Textarea {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Placeholder'
}

export const Disabled = Template.bind({})

Disabled.args = {
  placeholder: 'Placeholder',
  disabled: true
}
