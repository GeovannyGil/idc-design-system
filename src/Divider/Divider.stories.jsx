import React from 'react'
import { Divider } from './Divider'
import { TitleDivider } from './TitleDivider'

export default {
  title: 'Component/Divider',
  component: Divider,
  subcomponents: { TitleDivider }
}

const Template = (args) => <Divider {...args} />

export const Default = Template.bind({})

const TitleDividerTemplate = (args) => <TitleDivider {...args} />

export const TitleDividerDefault = TitleDividerTemplate.bind({})

TitleDividerDefault.args = {
  children: 'Title'
}
