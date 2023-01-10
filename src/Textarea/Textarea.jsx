import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useField } from '../Field'
import { colors } from '../tokens'
import { focusInputStyle } from '../shared/utils'

const TextareaWrapper = styled.div`
  width: 100%;
  border: 1px solid ${colors.neutral[200]};
  border-radius: 4px;
  padding: 10px 16px;
  background-color: ${colors.base.white};

  ${({ hasError }) => focusInputStyle(hasError)}

  &[aria-disabled='true'] {
    background-color: ${colors.neutral[100]};
    cursor: not-allowed;
  }

  & textarea {
    display: block;
    resize: vertical;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    border: none;
    /* height: 5rem; */
    min-height: 5rem;
    line-height: 1.25rem;

    &::placeholder {
      color: ${colors.neutral[400]};
    }

    &:focus-within {
      outline: none;
    }

    &:disabled {
      background-color: ${colors.neutral[100]};
      color: ${colors.neutral[500]};
    }
  }
`

export const Textarea = forwardRef(({ disabled, required, placeholder, ...props }, ref) => {
  const { id, error, hint, name, required: requiredField, disabled: disabledField } = useField()
  const isDisabled = disabled || disabledField
  const isRequired = required || requiredField
  const hasError = Boolean(error)
  let ariaDescription

  if (error) {
    ariaDescription = `${id}-error`
  } else if (hint) {
    ariaDescription = `${id}-hint`
  }

  return (
    <TextareaWrapper
      aria-disabled={isDisabled}
      hasError={hasError}
    >
      <textarea
        name={name}
        ref={ref}
        disabled={isDisabled}
        aria-describedby={ariaDescription}
        aria-invalid={hasError}
        aria-required={isRequired}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </TextareaWrapper>
  )
})

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string
}

Textarea.defaultProps = {
  disabled: false,
  required: false
}
