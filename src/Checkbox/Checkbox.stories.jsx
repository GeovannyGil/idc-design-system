import React, { useState } from 'react'
import { Checkbox } from './Checkbox'
import { CHECKBOX_STATES } from './utils'
import { Flex } from '../Flex'
import FormData from 'form-data'
import { Button } from '../Button'

export default {
  title: 'Component/Checkbox',
  component: Checkbox
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
  value: CHECKBOX_STATES.Empty
}

export const Empty = () => {
  const [checked, setChecked] = useState(CHECKBOX_STATES.Empty)
  const [checked2, setChecked2] = useState(CHECKBOX_STATES.Indeterminate)

  const handleChange = (e, value) => setChecked(value)
  const handleChange2 = (e, value) => setChecked2(value)

  return (
    <>
      <Flex direction='column'>
        <Checkbox
          label='Checkbox'
          value={checked}
          onChange={handleChange}
        />
        <Checkbox
          label='Checkbox'
          value={checked2}
          onChange={handleChange2}
        />
      </Flex>
    </>
  )
}

export const Disabled = () => {
  const [checked, setChecked] = useState(CHECKBOX_STATES.Empty)
  const [checked2, setChecked2] = useState(CHECKBOX_STATES.Checked)
  const [checked3, setChecked3] = useState(CHECKBOX_STATES.Indeterminate)

  const handleChange = (e, value) => setChecked(value)
  const handleChange2 = (e, value) => setChecked2(value)
  const handleChange3 = (e, value) => setChecked3(value)

  return (
    <>
      <Flex direction='column'>
        <Checkbox
          label='Checkbox'
          value={checked}
          onChange={handleChange}
          disabled
        />
        <Checkbox
          label='Checkbox'
          value={checked2}
          onChange={handleChange2}
          disabled
        />
        <Checkbox
          label='Checkbox'
          value={checked3}
          onChange={handleChange3}
          disabled
        />
      </Flex>
    </>
  )
}

export const CheckboxGroup = () => {
  const [checkedItems, setCheckedItems] = useState([false, true, false])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  const handleSubmit = (e) => {
    e.preventDefault()
    // obtain the form data from the event object
    const data = new FormData(e.target)
    // convert the data to a plain object
    const entries = [...data.entries()]
    const formData = Object.fromEntries(entries)
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <Checkbox
            label='Select all'
            name='select-all'
            value={allChecked ? CHECKBOX_STATES.Checked : isIndeterminate ? CHECKBOX_STATES.Indeterminate : CHECKBOX_STATES.Empty}
            onChange={(e, value) => setCheckedItems(checkedItems.map(() => value === CHECKBOX_STATES.Checked))}
          />
        </li>
        <li>
          <Checkbox
            label='Checkbox 1'
            name='checkbox-1'
            value={checkedItems[0] ? CHECKBOX_STATES.Checked : CHECKBOX_STATES.Empty}
            onChange={(e, value) => setCheckedItems([value === CHECKBOX_STATES.Checked, checkedItems[1], checkedItems[2]])}
          />
        </li>
        <li>
          <Checkbox
            label='Checkbox 2'
            name='checkbox-2'
            value={checkedItems[1] ? CHECKBOX_STATES.Checked : CHECKBOX_STATES.Empty}
            onChange={(e, value) => setCheckedItems([checkedItems[0], value === CHECKBOX_STATES.Checked, checkedItems[2]])}
          />
        </li>
        <li>
          <Checkbox
            label='Checkbox 3'
            name='checkbox-3'
            value={checkedItems[2] ? CHECKBOX_STATES.Checked : CHECKBOX_STATES.Empty}
            onChange={(e, value) => setCheckedItems([checkedItems[0], checkedItems[1], value === CHECKBOX_STATES.Checked])}
          />
        </li>
      </ul>
      <Button variant='primary' type='submit'>Submit</Button>
    </form>
  )
}
