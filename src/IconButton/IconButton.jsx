import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { LoadingWrapper } from '../Button'
import { Icon } from '../Icon'
import { colors, misc } from '../tokens'

const IconButtonWrapper = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.neutral[300]};
  border-radius: ${misc.borderRadius.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  width: 2rem;
  height: 2rem;
  background-color: ${colors.base.white};

  & path {
    fill: ${colors.neutral[500]};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${colors.neutral[200]};
    border-color: ${colors.neutral[300]};
    cursor: not-allowed;

    & path {
      fill: ${colors.neutral[400]};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: ${misc.borderRadius.md};
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
      border-radius: ${misc.borderRadius.md};
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${colors.primary[400]};
    }
  }

  &:hover {
    border-color: ${colors.neutral[300]};

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
`

export const IconButton = forwardRef(({ label, icon, disabled, onClick, loading, ...props }, ref) => {
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
  loading: PropTypes.bool
}

IconButton.defaultProps = {
  label: 'Default',
  icon: <Icon type='warning' />,
  onClick: undefined,
  disabled: false,
  loading: false
}