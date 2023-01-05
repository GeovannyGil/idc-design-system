import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StylesTypography } from '../Typography'
import { colors, fonts, misc } from '../tokens'
import { CHECKBOX_STATES } from './utils'
import { FieldError, FieldHint } from '../Field'
import { Flex } from '../Flex'

const LayoutInput = styled.div`
  display: grid;
  align-items: center;

  ${({ label }) =>
    label
      ? `
        grid-template-columns: 1em auto;
        gap: 16px;
    `
      : `
      grid-template-columns: 1em;
    `
  }

  ${StylesTypography('BODY')}

  /* ${({ checked }) => checked && `
    color: ${colors.primary[400]};
    font-weight: ${fonts.weight.Black}};
  `} */

  & + & {
    margin-top: 8px;
  }

  & input[type='checkbox'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    /* Not removed via appearance */
    margin: 0;
    cursor: pointer;

    font: inherit;
    color: ${colors.base.white};
    width: 20px;
    height: 20px;
    border-radius: ${misc.borderRadius.sm};
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    ${({ error }) => !error ? `border: 1px solid ${colors.neutral[300]}` : `border: 1px solid${colors.danger[600]}`};
  }
  & input[type='checkbox']::before {
    content: "";
    width: 10px;
    height: 10px;
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${colors.base.white};
    /* Windows High Contrast Mode */
    background-color: ${colors.base.white};
  }
  & input[type='checkbox']:checked {
    background-color: ${colors.primary[400]};
    border-color: ${colors.primary[400]};
    &::before {
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(1);
    }
  }
  & input[type='checkbox']:indeterminate {
    background-color: ${colors.primary[400]};
    border-color: ${colors.primary[400]};
    &::before {
      clip-path: polygon(100% 35%,100% 60%,0% 60%,0% 35%);
      transform: scale(1);
    }
  }
  & input[type='checkbox']:focus {
    outline: max(2px, 0.15em) solid ${colors.primary[400]};
    outline-offset: max(2px, 0.15em);
  }
  & input[type='checkbox']:disabled {
    cursor: not-allowed;
    background-color: ${colors.neutral[200]};
  }
  & input[type='checkbox']:disabled::before {
    box-shadow: inset 1em 1em ${colors.neutral[400]};
    background-color: ${colors.neutral[400]};
  }
  & input[type='checkbox']:disabled:checked,
  & input[type='checkbox']:disabled:indeterminate {
    background-color: ${colors.neutral[200]};
    border-color: ${colors.neutral[300]};
  }
  &[aria-disabled='true'] {
    color: ${colors.neutral[400]};
    cursor: not-allowed;
  }

`

const FormControl = styled.label`
  display: flex;
  transition: all .2s ease;
  cursor: pointer;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: ${misc.borderRadius.sm};

  ${({ label }) =>
    label &&
    `
      flex-direction: column;
      padding: 8px;
      &:hover {
        background-color: ${colors.neutral[100]};
      }
    `}

  ${({ hint, error }) => (hint || error) && 'gap: 8px;'}

  ${({ error }) => error &&
    `
      background-color: ${colors.danger[100]};
      border-color: ${colors.danger[600]};
    `
  };
`

export const Checkbox = ({ label, disabled, value, onChange, name, hint, error, ...props }) => {
  const hasLabel = label && label.length > 0
  const hasHint = hint && hint.length > 0
  const hasError = error && error.length > 0
  const checkBoxRef = useRef()

  const handleChange = (e) => {
    if (disabled) return
    let updatedChecked

    if (value === CHECKBOX_STATES.Checked) {
      updatedChecked = CHECKBOX_STATES.Empty
      console.log('updatedChecked', updatedChecked)
    } else if (value === CHECKBOX_STATES.Empty) {
      updatedChecked = CHECKBOX_STATES.Checked
      console.log('updatedChecked', updatedChecked)
    } else if (value === CHECKBOX_STATES.Indeterminate) {
      updatedChecked = CHECKBOX_STATES.Checked
      console.log('updatedChecked', updatedChecked)
    }
    console.log('updatedChecked', updatedChecked)
    console.log('updatedChecked', updatedChecked)

    onChange(e, updatedChecked)
  }

  useEffect(() => {
    if (value === CHECKBOX_STATES.Checked) {
      checkBoxRef.current.checked = true
      checkBoxRef.current.indeterminate = false
    } else if (value === CHECKBOX_STATES.Empty) {
      checkBoxRef.current.checked = false
      checkBoxRef.current.indeterminate = false
    } else if (value === CHECKBOX_STATES.Indeterminate) {
      checkBoxRef.current.checked = false
      checkBoxRef.current.indeterminate = true
    }
  }, [value])

  return (
    <FormControl
      checked={value === CHECKBOX_STATES.Checked}
      label={hasLabel}
      hint={hasHint}
      error={hasError}
    >
      <LayoutInput
        aria-disabled={disabled}
        disabled={disabled}
        label={hasLabel}
        error={hasError}
      >
        <input
          ref={checkBoxRef}
          type='checkbox'
          name={name}
          disabled={disabled}
          value={value === CHECKBOX_STATES.Checked}
          onChange={handleChange}
          {...props}
        />
        {hasLabel && <span>{label}</span>}
      </LayoutInput>
      {
        hasLabel &&
          <Flex direction='column'>
            {hint && <FieldHint hint={hint} />}
            {error && <FieldError error={error} />}
          </Flex>
        }
    </FormControl>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Object.values(CHECKBOX_STATES))
  ]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  error: PropTypes.string
}

Checkbox.defaultProps = {
  label: '',
  value: false,
  onChange: undefined,
  name: '',
  disabled: false,
  hint: '',
  error: ''
}
