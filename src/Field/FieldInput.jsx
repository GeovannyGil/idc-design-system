import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, misc } from '../tokens'
import { focusInputStyle } from '../shared/utils'
import { useField } from './FieldContext'

export const FieldInputContaier = styled.div`
  width: 100%;
  padding: 10px 16px;
  border-radius: ${misc.borderRadius.sm};
  border: 1px solid ${colors.neutral[200]};

  ${({ disabled }) =>
    disabled && {
      backgroundColor: colors.neutral[100]
    }}

  ${({ error }) => focusInputStyle(error)}

  & input {
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    border: none;

    &::placeholder {
      color: ${colors.neutral[400]};
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      background-color: ${colors.neutral[100]};
      color: ${colors.neutral[500]};
    }
  }
`

export const FieldInput = forwardRef(({ disabled, placeholder, onChange, ...props }, ref) => {
  const { id, error, hint, name, required, disabled: disabledField } = useField()
  const isDisabled = disabled || disabledField
  let ariaDescription
  const hasError = Boolean(error)

  if (error) {
    ariaDescription = `${id}-error`
  } else if (hint) {
    ariaDescription = `${id}-hint`
  }

  const handleChange = (e) => {
    if (isDisabled) return
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <FieldInputContaier
      disabled={isDisabled}
      aria-disabled={isDisabled}
      error={hasError}
    >
      <input
        id={id}
        name={name}
        ref={ref}
        aria-describedby={ariaDescription}
        aria-invalid={hasError}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={handleChange}
        aria-required={required}
        required={required}
        {...props}
      />
    </FieldInputContaier>
  )
})

FieldInput.displayName = 'FieldInput'

FieldInput.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

FieldInput.defaultProps = {
  disabled: false,
  placeholder: '',
  onChange: () => { }
}
