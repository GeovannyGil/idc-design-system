import React from 'react'
import { TYPE_TEXT_VARIANTS } from './constants'
import { Typography } from './Typography'

export default {
  title: 'Component/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: TYPE_TEXT_VARIANTS,
      control: 'select'
    }
  }
}

export const TypographyStory = (args) => <Typography {...args} />

TypographyStory.args = {
  variant: 'HEADER1',
  children: 'Typography'
}

export const Variants = () => (
  <div className='container_typographys'>
    <Typography variant='HEADER1'>Header 1</Typography>
    <Typography variant='HEADER2'>Header 2</Typography>
    <Typography variant='HEADER3'>Header 3</Typography>
    <Typography variant='SUBTITLE'>Subtitle</Typography>
    <Typography variant='BODY'>Body</Typography>
    <Typography variant='BODY' highlight>Body Highlight</Typography>
    <Typography variant='BUTTON' highlight>Button</Typography>
    <Typography variant='BUTTON'>Button Highlight</Typography>
    <Typography variant='SMALL'>Small</Typography>
    <Typography variant='SMALL' highlight>Small Highlight</Typography>
    <Typography variant='TABLE_LABEL'>Table Label</Typography>
  </div>
)

// Default.args = {
//   variant: 'HEADING1',
//   children: 'Typography'
// }
