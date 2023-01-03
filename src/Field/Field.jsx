import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FieldLabel } from './FieldLabel'
import { FieldHint } from './FieldHint'
import { FieldError } from './FieldError'
import { colors, misc } from '../tokens'
import { focusInputStyle } from '../shared/utils'

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

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

export const Field = forwardRef(({ label, hint, error, disabled, placeholder, required, onChange, ...props }, ref) => {
  const stateError = error !== ''

  const handleChange = (e) => {
    if (disabled) return
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <FieldContainer>
      {
        label &&
          <FieldLabel
            labelText={label}
            required={required}
          />
      }
      <FieldInputContaier
        disabled={disabled}
        aria-disabled={disabled}
        error={stateError}
      >
        <input
          type='text'
          placeholder={placeholder}
          disabled={disabled}
          aria-disabled={disabled}
          required={required}
          aria-required={required}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
      </FieldInputContaier>
      {
        stateError &&
          <FieldError
            error={error}
          />
      }
      {
        hint &&
          <FieldHint
            hint={hint}
          />
      }
    </FieldContainer>
  )
})

Field.displayName = 'Field'

Field.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.string,
  onChange: PropTypes.func
}

Field.defaultProps = {
  placeholder: '',
  disabled: false,
  error: '',
  label: '',
  required: false,
  hint: '',
  onChange: undefined
}
