import React from 'react'
import { Select } from './Select'

export default {
  title: 'Component/Select',
  component: Select
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Select an option',
  options: [
    { value: 'React', label: 'React' },
    { value: 'Vue', label: 'Vue' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Svelte', label: 'Svelte' },
    { value: 'Ember', label: 'Ember' },
    { value: 'Meteor', label: 'Meteor' },
    { value: 'Backbone', label: 'Backbone' },
    { value: 'Polymer', label: 'Polymer' },
    { value: 'Aurelia', label: 'Aurelia' }
  ]
}
