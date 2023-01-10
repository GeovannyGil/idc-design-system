import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { SearchForm } from './SearchForm'

export default {
  title: 'Component/SearchBar',
  component: SearchBar
}

const Template = (args) => <SearchBar {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Search',
  disabled: false
}

export const Disabled = Template.bind({})

Disabled.args = {
  placeholder: 'Search',
  disabled: true
}

export const Small = Template.bind({})
Small.args = {
  placeholder: 'Search',
  disabled: false,
  size: 'sm'
}

export const WithForm = () => {
  const [value, setValue] = useState('')
  return (
    <SearchForm>
      <SearchBar
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name='searchbar'
      />
    </SearchForm>
  )
}
