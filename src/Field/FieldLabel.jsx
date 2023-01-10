import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'
import { useField } from './FieldContext'

const LabelContent = styled.label`
  display: block;
  font-size: .75rem;
  line-height: 1.33;
  font-weight: 600;
  color: ${colors.neutral[700]};

  ${({ required }) =>
  required && {
    '&::after': {
      content: '"*"',
      color: colors.danger[600]
      // marginLeft: '0.5rem'
    }
  }}
`

export const FieldLabel = ({ children, action, required: requiredDeprecatedProp, ...props }) => {
  const { id, required: requiredField } = useField()
  const required = requiredDeprecatedProp || requiredField

  if (requiredDeprecatedProp !== undefined) {
    console.warn(
      'Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'
    )
  }
  if (children === undefined) return null
  return (
    <LabelContent htmlFor={id} required={required} {...props}>
      {children}
    </LabelContent>
  )
}

FieldLabel.propTypes = {
  children: PropTypes.string,
  required: PropTypes.bool,
  action: PropTypes.node
}

FieldLabel.defaultProps = {
  labelText: '',
  required: undefined
}
