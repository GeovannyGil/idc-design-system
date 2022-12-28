import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { Button } from './Button'

export default {
  title: 'Component/Button',
  component: Button
}

const ContainerVariants = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  variant: 'default',
  children: 'Default',
  icon: <Icon type='warning' />,
  onClick: () => { console.log('clicked') }
}

export const Sizes = () => (
  <ContainerVariants>
    <Button size='small' variant='primary'>Small</Button>
    <Button size='medium' variant='primary'>Medium</Button>
    <Button size='large' variant='primary'>Large</Button>
  </ContainerVariants>
)

export const Variants = () => (
  <ContainerVariants>
    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='tertiary'>Tertiary</Button>
    <Button variant='success'>Success</Button>
    <Button variant='danger'>Danger</Button>
    <Button variant='text'>Text</Button>
  </ContainerVariants>
)

export const Icons = () => (
  <ContainerVariants>
    <Button variant='primary' icon={<Icon type='loader' />}>Primary</Button>
    <Button variant='secondary' loading>Loading</Button>
  </ContainerVariants>
)
