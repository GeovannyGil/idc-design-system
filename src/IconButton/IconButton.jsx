import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { LoadingWrapper } from '../Button'
import { Icon } from '../Icon'
import { colors, misc } from '../tokens'
import { focusStyle } from '../shared/utils'

const IconButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${misc.borderRadius.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${colors.base.white};

  ${props => props.border && `
    border-color: ${colors.neutral[300]};
  `}

  & path {
    fill: ${colors.neutral[500]};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${colors.neutral[200]};
    cursor: not-allowed;

    & path {
      fill: ${colors.neutral[400]};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${focusStyle}

  &:hover {
    & path {
      fill: ${colors.neutral[400]};
    }
  }

  &:active {
    background-color: ${colors.neutral[100]};

    & path {
      fill: ${colors.neutral[500]};
    }
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          height: 1.5rem;
          width: 1.5rem;

          & .iconWrapper {
            height: 20px;
            width: 20px;
          }
        `
      case 'lg':
        return `
          height: 26px;
          width: 26px;
        `
      case 'md':
      default:
        return `
          width: 2rem;
          height: 2rem;
        `
    }
  }}
`

export const IconButton = forwardRef(({ label, border = true, icon, disabled, onClick, loading, size, ...props }, ref) => {
  const isDisabled = disabled || loading

  const handleClick = (e) => {
    if (!isDisabled && onClick) {
      onClick(e)
    }
  }

  return (
    <IconButtonWrapper
      ref={ref}
      aria-label={label}
      onClick={handleClick}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      border={border}
      size={size}
      {...props}
    >
      {loading
        ? (
          <LoadingWrapper>
            <Icon type='loader' />
          </LoadingWrapper>
          )
        : icon}
    </IconButtonWrapper>
  )
})

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  border: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

IconButton.defaultProps = {
  label: 'Default',
  icon: <Icon type='warning' />,
  onClick: undefined,
  disabled: false,
  loading: false,
  size: 'md'
}
