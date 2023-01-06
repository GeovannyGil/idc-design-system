import React, { useState } from 'react'
import { Accordion } from './Accordion'
import { AccordionToggleCheckbox } from './AccordionToggleCheckbox'

export default {
  title: 'Component/Accordion',
  component: Accordion,
  subcomponents: { AccordionToggleCheckbox }
}

const Template = (args) => <Accordion {...args} />
const TemplateFieldToggle = (args) => {
  const [checked, setChecked] = useState(args.checked)
  return (
    <AccordionToggleCheckbox checked={checked} onChange={(e) => setChecked(!checked)} {...args} />
  )
}

export const Default = Template.bind({})

Default.args = {
  title: 'Titulo',
  description: 'Descripcion',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor,',
  expanded: false
}

export const Expanded = Template.bind({})

Expanded.args = {
  title: 'Titulo',
  description: 'Descripcion',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor,',
  expanded: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Titulo',
  description: 'Descripcion',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor,',
  expanded: false,
  disabled: true
}

export const AccordionCheckbox = TemplateFieldToggle.bind({})

AccordionCheckbox.args = {
  title: 'Titulo',
  description: 'Descripcion',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor, aliquam nunc sit amet, aliquet nisl. Nullam consectetur, nisl nec tincidunt lacinia, nunc est aliquam nisl, nec ultricies nunc nisl eget nisl. Nullam eget nisl auctor,'
}
