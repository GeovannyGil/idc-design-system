import React from 'react'
import { Field } from './Field'
import { FieldLabel } from './FieldLabel'
import { FieldInput } from './FieldInput'
import { FieldError } from './FieldError'
import { FieldHint } from './FieldHint'

export default {
  title: 'Component/Field',
  component: Field
}

export const Default = () => {
  return (
    <Field name='Label'>
      <FieldLabel>Label</FieldLabel>
      <FieldInput type='text' placeholder='Placeholder' />
    </Field>
  )
}

export const WithDescription = () => {
  return (
    <Field name='Label' hint='Description'>
      <FieldLabel>Label</FieldLabel>
      <FieldInput type='text' placeholder='Placeholder' />
      <FieldHint />
    </Field>
  )
}

export const WithError = () => {
  return (
    <Field name='Label' error='Error'>
      <FieldLabel>Label</FieldLabel>
      <FieldInput type='text' placeholder='Placeholder' />
      <FieldError />
    </Field>
  )
}

export const WithDescriptionAndError = () => {
  return (
    <Field name='Label' hint='Description' error='Error'>
      <FieldLabel>Label</FieldLabel>
      <FieldInput type='text' placeholder='Placeholder' />
      <FieldHint />
      <FieldError />
    </Field>
  )
}

export const Required = () => {
  return (
    <Field name='Label' required>
      <FieldLabel>Label</FieldLabel>
      <FieldInput type='text' placeholder='Placeholder' />
    </Field>
  )
}

export const Disabled = () => {
  return (
    <Field name='Label' disabled>
      <FieldLabel>Label</FieldLabel>
      <FieldInput type='text' placeholder='Placeholder' />
    </Field>
  )
}
