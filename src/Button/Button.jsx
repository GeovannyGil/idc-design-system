import React from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'
import styled from 'styled-components'
import { Icon } from '../Icon'

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  line-height: 1.14;
  min-width: max-content;
  outline: none;
  position: relative;
  gap: 8px;

  &:disabled,
  &:disabled:hover {
    background-color: var(--color-neutral-200);
    border: 1px solid var(--color-neutral-300);
    color: var(--color-neutral-500);
    cursor: not-allowed;

    & svg path {
      fill: var(--color-neutral-500);
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: var(--border-radius-md);
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: var(--border-radius-md);
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid var(--color-primary-400);
    }
  }

    ${({ size }) => {
    switch (size) {
      case 'small':
        return `
            padding: 8px 16px;
            font-size: 0.75rem;
            height: 2rem;

            & .iconWrapper {
              width: 20px;
            }
          `
      case 'large':
        return `
            padding: 12px 16px;
            font-size: 1rem;
            height: 2.5rem;

            & .iconWrapper {
              width: 24px;
            }
          `
      default:
        return `
            padding: 10px 16px;
            font-size: 0.875rem;
            height: 2.25rem;

            & .iconWrapper {
              width: 24px;
            }
          `
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: var(--color-primary-500);
          color: var(--color-base-white);

          & svg path {
            fill: var(--color-base-white);
          }

          &:hover {
            background-color: var(--color-alternative-500);
          }

          &:active {
            background-color: var(--color-primary-500);
          }
        `
      case 'secondary':
        return `
          background-color: var(--color-primary-100);
          color: var(--color-primary-300);
          border: 1px solid var(--color-primary-300);

          & svg path {
            fill: var(--color-primary-300);
          }

          &:hover {
            background-color: var(--color-base-white);
            color: var(--color-primary-200);
            border: 1px solid var(--color-primary-200);
          }

          &:active {
            background-color: var(--color-base-white);
            color: var(--color-primary-400);
            border: 1px solid var(--color-primary-400);
          }
        `
      case 'tertiary':
        return `
          background-color: var(--color-base-white);
          color: var(--color-neutral-800);
          border: 1px solid var(--color-neutral-200);

          & svg path {
            fill: var(--color-neutral-800);
          }

          &:hover {
            background-color: var(--color-neutral-100);
            color: var(--color-neutral-800);
            border: 1px solid var(--color-neutral-200);
          }

          &:active {
            background-color: var(--color-neutral-300);
            color: var(--color-neutral-800);
            border: 1px solid var(--color-neutral-200);
          }
        `
      case 'success':
        return `
          background-color: var(--color-success-100);
          color: var(--color-success-600);
          border: 1px solid var(--color-success-200);

          & svg path {
            fill: var(--color-success-600);
          }

          &:hover {
            background-color: var(--color-base-white);
            color: var(--color-success-600);
            border: 1px solid var(--color-success-200);
          }

          &:active {
            background-color: var(--color-base-white);
            color: var(--color-success-700);
            border: 1px solid var(--color-success-700);
          }
        `
      case 'danger':
        return `
          background-color: var(--color-danger-100);
          color: var(--color-danger-600);
          border: 1px solid var(--color-danger-200);

          & svg path {
            fill: var(--color-danger-600);
          }

          &:hover {
            background-color: var(--color-base-white);
            color: var(--color-danger-600);
            border: 1px solid var(--color-danger-200);
          }

          &:active {
            background-color: var(--color-base-white);
            color: var(--color-danger-700);
            border: 1px solid var(--color-danger-700);
          }
        `
      case 'text':
        return `
          background-color: var(--color-base-white);
          color: var(--color-primary-400);
          border-color: transparent;

          & svg path {
            fill: var(--color-primary-400);
          }

          &:hover {
            color: var(--color-alternative-600);
          }

          &:active {
            color: var(--color-primary-500);
          }

          &:disabled, &:disabled:hover {
            border-color: transparent;
            background-color: var(--color-base-white);
          }
        `
    }
  }}

  ${({ fullWidth }) => fullWidth && `
    width: 100%;
  `}

`

export const Button = React.forwardRef(
  ({ children, variant, size, disabled, onClick, fullWidth, loading, icon, ...props }, ref) => {
    const isDisabled = disabled || loading

    const handleClick = (e) => {
      if (isDisabled && onClick) {
        onClick(e)
      }
    }
    return (
      <ButtonWrapper
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        onClick={handleClick}
        {...props}
      >
        {(icon || loading) &&
          <>
            {
              loading ? <Icon type='loader' className='animate--rotate' /> : (icon)
            }
          </>}
        {children}
      </ButtonWrapper>
    )
  }
)

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary', 'success', 'danger', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  icon: PropTypes.element
}

Button.defaultProps = {
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  onClick: undefined,
  loading: false,
  icon: undefined
}
