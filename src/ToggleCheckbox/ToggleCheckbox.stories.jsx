import React, { useState } from 'react'
import { ToggleCheckbox } from './ToggleCheckbox'

export default {
  title: 'Component/ToggleCheckbox',
  component: ToggleCheckbox
}

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <ToggleCheckbox {...args} checked={checked} onChange={handleChange} />
  )
}

export const Default = Template.bind({})

Default.args = {
  checked: null
}

export const CheckedOn = Template.bind({})
CheckedOn.args = {
  checked: true
}

export const CheckedOff = Template.bind({})
CheckedOff.args = {
  checked: false
}

export const Disabled = Template.bind({})

Disabled.args = {
  checked: true,
  disabled: true
}
