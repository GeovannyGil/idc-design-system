import React from 'react'
import styled from 'styled-components'
import { Avatar } from './Avatar'

const ContainerSize = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export default {
  title: 'Component/Avatar',
  component: Avatar
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  size: 'sm',
  src: '/images/avatar.jpeg',
  alt: 'Richard Aitkenhead'
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  size: 'sm',
  src: '',
  alt: 'Richard Aitkenhead'
}

export const Sizes = () => (
  <ContainerSize>
    <Avatar size='xs' src='/images/avatar.jpeg' alt='Richard Aitkenhead' />
    <Avatar size='sm' src='/images/avatar.jpeg' alt='Richard Aitkenhead' />
    <Avatar size='md' src='/images/avatar.jpeg' alt='Richard Aitkenhead' />
    <Avatar size='lg' src='/images/avatar.jpeg' alt='Richard Aitkenhead' />
    <Avatar size='xl' src='/images/avatar.jpeg' alt='Richard Aitkenhead' />
    <Avatar size='2xl' src='/images/avatar.jpeg' alt='Richard Aitkenhead' />
  </ContainerSize>
)
