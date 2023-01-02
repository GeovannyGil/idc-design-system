import React from 'react'
import { IconButton } from './IconButton'
import { Icon } from '../Icon'

export default {
  title: 'Component/IconButton',
  component: IconButton
}

const Template = (args) => <IconButton {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Default',
  icon: <Icon type='warning' />
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Disabled',
  icon: <Icon type='warning' />,
  disabled: true
}

export const Loading = Template.bind({})

Loading.args = {
  label: 'Loading',
  icon: <Icon type='warning' />,
  loading: true
}
