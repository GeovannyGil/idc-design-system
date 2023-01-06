import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { focusInputStyle } from '../shared/utils'
import { colors, misc, spacing } from '../tokens'
import { Typography } from '../Typography'

const Input = styled.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`

const ValueBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${misc.borderRadius.sm};
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  & span {
    color: ${colors.neutral[500]};
  }

  ${({ checked, type }) => {
    if (checked && type === 'on') {
      return `
        background-color: ${colors.base.white};
        border-color: ${colors.neutral[200]};

        & span {
          color: ${colors.primary[400]};
        }

        &[aria-disabled='true'] {
          background-color: ${colors.neutral[200]};
          border-color: ${colors.neutral[400]};

          & span {
            color: ${colors.neutral[600]};
          }
        }
      `
    }

    if (checked === false && type === 'off') {
      return `
        background-color: ${colors.base.white};
        border-color: ${colors.neutral[200]};

        & span {
          color: ${colors.danger[600]};
        }

        &[aria-disabled='true'] {
          background-color: ${colors.neutral[200]};
          border-color: ${colors.neutral[400]};

          & span {
            color: ${colors.neutral[600]};
          }
        }
      `
    }
  }};
  padding: ${({ size }) => (size === 'sm' ? '2px 16px' : '8px 24px')};
  position: relative;
  user-select: none;
  z-index: 2;
  /* flex: 1 1 50%; */
  cursor: pointer;

  &[aria-disabled='true'] {
    cursor: not-allowed;
    & span {
      color: ${colors.neutral[400]};
    }
  }
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  z-index: 0;
width: ${({ width }) => width || '100%'};/*  */
`

const ToggleCheckboxWrapper = styled.div`
  cursor: pointer;
  background-color: ${colors.neutral[100]};
  border: 1px solid ${colors.neutral[300]};
  border-radius: ${misc.borderRadius.sm};
  padding: ${spacing[1]};
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  gap: 10px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  ${focusInputStyle(false, '&')}

  &:hover{
    border-color: ${colors.neutral[400]};
  }
`

export const ToggleCheckbox = forwardRef(({ width, size, textOn, textOff, checked, disabled, onChange, name, ...props }, ref) => {
  const checkedValue = checked === null ? false : checked
  // If state is null
  // const checkedValue = checked

  const handleChange = (e) => {
    if (disabled) return

    onChange(e)
  }

  return (
    <Label
      width={width}
    >
      <ToggleCheckboxWrapper
        aria-disabled={disabled}
        aria-checked={checked}
      >
        <ValueBox
          type='off'
          size={size}
          checked={checkedValue}
          aria-disabled={disabled}
        >
          <Typography
            variant='SMALL'
            highlight
            textAlign='center'
          >
            {textOff}
          </Typography>
        </ValueBox>
        <ValueBox
          type='on'
          size={size}
          checked={checkedValue}
          aria-disabled={disabled}
        >
          <Typography
            variant='SMALL'
            highlight
            textAlign='center'
          >
            {textOn}
          </Typography>
        </ValueBox>
        <Input
          type='checkbox'
          aria-disabled={disabled}
          onChange={handleChange}
          name={name}
          checked={checkedValue}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </ToggleCheckboxWrapper>
    </Label>
  )
})

ToggleCheckbox.displayName = 'ToggleCheckbox'

ToggleCheckbox.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  textOn: PropTypes.string,
  textOff: PropTypes.string,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  width: PropTypes.string
}

ToggleCheckbox.defaultProps = {
  size: 'md',
  textOn: 'True',
  textOff: 'False',
  checked: null,
  disabled: false,
  onChange: undefined,
  name: undefined
}
