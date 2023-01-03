import React from 'react'
import styled from 'styled-components'
import { Typography } from './Typography'

const ContainerTypography = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
  gap: 1rem;
`

export default {
  title: 'Component/Typography',
  component: Typography
}

export const Default = (args) => <Typography {...args} />

Default.args = {
  children: 'Typography'
}

export const Variants = () => (
  <ContainerTypography>
    <Typography variant='HEADER1'>Header 1</Typography>
    <Typography variant='HEADER2'>Header 2</Typography>
    <Typography variant='HEADER3'>Header 3</Typography>
    <Typography variant='SUBTITLE'>Subtitle</Typography>
    <Typography variant='BODY'>Body</Typography>
    <Typography variant='BODY' highlight>Body Highlight</Typography>
    <Typography variant='BUTTON'>Button</Typography>
    <Typography variant='BUTTON' highlight>Button Highlight</Typography>
    <Typography variant='SMALL'>Small</Typography>
    <Typography variant='SMALL' highlight>Small Highlight</Typography>
    <Typography variant='TABLE_LABEL'>Table Label</Typography>
    <Typography variant='BODY' ellipsis>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. It is used as a placeholder because the actual content is not yet available, or because it is being used to demonstrate the layout of a document or a typeface. Lorem ipsum text is typically used in the design, printing, and publishing industries, as well as by web designers and developers. The text is </Typography>
  </ContainerTypography>
)
