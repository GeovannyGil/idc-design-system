import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styled from 'styled-components'
import { FieldLabel } from './FielLabel'
import { FieldHint } from './FieldHint'
import { FieldError } from './FieldError'

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
`

const FieldInputContaier = styled.div`
  width: 100%;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-200);

  ${({ disabled }) =>
  disabled && {
    backgroundColor: 'var(--color-neutral-100)'
  }}

  ${({ error }) =>
  error && {
    border: '1px solid var(--color-danger-500)'
  }}

  &:focus-within {
    border: 1px solid var(--color-primary-400);
    box-shadow: 0 0 0 2px var(--color-primary-400);
  }

  & input {
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    border: none;

    &::placeholder {
      color: var(--color-neutral-400);
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      background-color: var(--color-neutral-100);
      color: var(--color-neutral-500);
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
        className={clsx(
          'input'
        )}
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
          ref={ref}
          {...props}
          onChange={handleChange}
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
