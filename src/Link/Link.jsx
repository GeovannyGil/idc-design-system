import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, misc } from '../tokens'
import { Icon } from '../Icon'
import { NavLink } from 'react-router-dom'
import { focusStyle } from '../shared/utils'
import { StylesTypography } from '../Typography'

const LinkWrapper = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled ? 'none' : undefined};
  ${({ variant, highlight }) => StylesTypography(variant, highlight)}
  color: ${({ disabled }) => disabled ? colors.neutral[600] : colors.primary[400]};
  gap: ${misc.spacing[1]};

  & .iconWrapper{
    width: 16px;
    height: 16px;
    & path {
      transition: fill 0.2s ease-out;
      fill: currentColor;
    }
  }

  &:hover {
    color: ${colors.primary[300]};
  }

  &:active {
    color: ${colors.primary[500]};
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

  ${focusStyle}
`

export const Link = forwardRef(({ to, variant, highlight, target, rel, href, children, disabled, hasIcon }, ref) => {
  return (
    <LinkWrapper
      as={to && !disabled ? NavLink : 'a'}
      target={target}
      rel={rel}
      to={disabled ? undefined : to}
      href={disabled ? '#' : href}
      aria-disabled={disabled}
      disabled={disabled}
      ref={ref}
      variant={variant}
      highlight={highlight}
    >
      {children} {hasIcon && <Icon type='linkExternal' />}
    </LinkWrapper>
  )
})

Link.displayName = 'Link'

Link.propTypes = {
  variant: PropTypes.oneOf(['BODY', 'BUTTON', 'SMALL', 'TABLE_LABEL']),
  highlight: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  hasIcon: PropTypes.bool,
  target: PropTypes.string,
  rel: PropTypes.string,
  href (props) {
    if (!props.disabled && !props.to && !props.href) {
      return new Error('href must be defined')
    }

    return undefined
  },
  to (props) {
    if (!props.disabled && !props.to && !props.href) {
      return new Error('to must be defined')
    }

    return undefined
  }
}

Link.defaultProps = {
  variant: 'BODY',
  children: null,
  disabled: false,
  hasIcon: false,
  href: undefined,
  to: undefined
}
