import React from 'react'
import { Field } from './Field'

export default {
  title: 'Component/Field',
  component: Field
}

const Template = (args) => <Field {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder'
}

export const WithDescription = Template.bind({})

WithDescription.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  hint: 'Description'
}

export const WithError = Template.bind({})

WithError.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  error: 'Error'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: true
}
