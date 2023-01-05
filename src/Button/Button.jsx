import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Icon } from '../Icon'
import { colors, misc } from '../tokens'
import { focusStyle } from '../shared/utils'

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const LoadingWrapper = styled.div`
  animation: ${rotation} 2s infinite linear;
  will-change: transform;
`

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${misc.borderRadius.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  line-height: 1.14;
  /* min-width: max-content; */
  gap: 8px;
  ${({ nowrap }) => (nowrap ? 'white-space: nowrap;' : 'white-space: normal;')}

  &:disabled,
  &:disabled:hover {
    background-color: ${colors.neutral[200]};
    border: 1px solid ${colors.neutral[300]};
    color: ${colors.neutral[500]};
    cursor: not-allowed;

    & svg path {
      fill: ${colors.neutral[500]};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${focusStyle}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
            padding: 8px 16px;
            font-size: 0.75rem;

            & .iconWrapper {
              width: 19px;
              height: 19px;
            }
          `
      case 'large':
        return `
            padding: 12px 16px;
            font-size: 1rem;

            & .iconWrapper {
              width: 22px;
              height: 22px;
            }
          `
      default:
        return `
            padding: 10px 16px;
            font-size: 0.875rem;

            & .iconWrapper {
              width: 20px;
              height: 20px;
            }
          `
    }
  }}

  // TODO: Refactor this code styles same typography styles
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${colors.primary[500]};
          color: ${colors.base.white};

          & svg path {
            fill: ${colors.base.white};
          }

          &:hover {
            background-color: ${colors.alternative[500]};
          }

          &:active {
            background-color: ${colors.primary[500]};
          }
        `
      case 'secondary':
        return `
          background-color: ${colors.primary[100]};
          color: ${colors.primary[300]};
          border: 1px solid ${colors.primary[300]};

          & svg path {
            fill: ${colors.primary[300]};
          }

          &:hover {
            background-color: ${colors.base.white};
            color: ${colors.primary[200]};
            border: 1px solid ${colors.primary[200]};
          }

          &:active {
            background-color: ${colors.base.white};
            color: ${colors.primary[400]};
            border: 1px solid ${colors.primary[400]};
          }
        `
      case 'tertiary':
        return `
          background-color: ${colors.base.white};
          color: ${colors.neutral[800]};
          border: 1px solid ${colors.neutral[200]};

          & svg path {
            fill: ${colors.neutral[800]};
          }

          &:hover {
            background-color: ${colors.neutral[100]};
            color: ${colors.neutral[800]};
            border: 1px solid ${colors.neutral[200]};
          }

          &:active {
            background-color: ${colors.neutral[300]};
            color: ${colors.neutral[800]};
            border: 1px solid ${colors.neutral[200]};
          }
        `
      case 'success':
        return `
          background-color: ${colors.success[100]};
          color: ${colors.success[600]};
          border: 1px solid ${colors.success[200]};

          & svg path {
            fill: ${colors.success[600]};
          }

          &:hover {
            background-color: ${colors.base.white};
            color: ${colors.success[600]};
            border: 1px solid ${colors.success[200]};
          }

          &:active {
            background-color: ${colors.base.white};
            color: ${colors.success[700]};
            border: 1px solid ${colors.success[700]};
          }
        `
      case 'danger':
        return `
          background-color: ${colors.danger[100]};
          color: ${colors.danger[600]};
          border: 1px solid ${colors.danger[200]};

          & svg path {
            fill: ${colors.danger[600]};
          }

          &:hover {
            background-color: ${colors.base.white};
            color: ${colors.danger[600]};
            border: 1px solid ${colors.danger[200]};
          }

          &:active {
            background-color: ${colors.base.white};
            color: ${colors.danger[700]};
            border: 1px solid ${colors.danger[700]};
          }
        `
      case 'text':
        return `
          background-color: ${colors.base.white};
          color: ${colors.primary[400]};
          border-color: transparent;

          & svg path {
            fill: ${colors.primary[400]};
          }

          &:hover {
            color: ${colors.alternative[600]};
          }

          &:active {
            color: ${colors.primary[500]};
          }

          &:disabled, &:disabled:hover {
            border-color: transparent;
            background-color: ${colors.base.white};
          }
        `
    }
  }}

  ${({ fullWidth }) => fullWidth && `
    width: 100%;
  `}

  ${({ align }) => {
    switch (align) {
      case 'left':
        return `
          justify-content: flex-start;
          text-align: left;
        `
      case 'right':
        return `
          justify-content: flex-end;
          text-align: right;
        `
      default:
        return `
          justify-content: center;
          text-align: center;
        `
    }
  }}
`

export const Button = React.forwardRef(
  ({ children, variant, size, align, type, disabled, onClick, fullWidth, loading, icon, nowrap, ...props }, ref) => {
    const isDisabled = disabled || loading

    const handleClick = (e) => {
      if (!isDisabled && onClick) {
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
        align={align}
        nowrap={nowrap}
        type={type}
        {...props}
      >
        {(icon || loading) &&
          <>
            {
            loading
              ? (
                <LoadingWrapper>
                  <Icon type='loader' />
                </LoadingWrapper>
                )
              : (icon)
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
  icon: PropTypes.element,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  nowrap: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

Button.defaultProps = {
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  onClick: undefined,
  loading: false,
  icon: undefined,
  align: 'center',
  nowrap: false,
  type: 'button'
}
