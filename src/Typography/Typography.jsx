import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TYPE_TEXT_VARIANTS } from './constants'
import { colors, fonts } from '../tokens'

const TypographyWrapper = styled.span`
  font-size: 1rem;

  ${({ variant }) => {
    switch (variant) {
      case 'HEADER1':
        return `
          font-size: ${fonts.size['4xl']};
          font-weight: ${fonts.weight.Black};
          line-height: 2.5rem;
          color: ${colors.neutral[800]};
        `
      case 'HEADER2':
        return `
          font-size: ${fonts.size.lg};
          font-weight: ${fonts.weight.Black};
          line-height: 1.375rem;
          color: ${colors.neutral[800]};
        `
      case 'HEADER3':
        return `
          font-size: ${fonts.size.md};
          font-weight: ${fonts.weight.Heavy};
          line-height: 1.25rem;
          color: ${colors.neutral[800]};
        `
      case 'SUBTITLE':
        return `
          font-size: ${fonts.size.md};
          font-weight: ${fonts.weight.Medium};
          line-height: 1.5rem;
          color: ${colors.neutral[600]};
        `
      case 'BODY':
      case 'BUTTON':
        return `
          font-size: ${fonts.size.sm};
          font-weight: ${fonts.weight.Roman};
          line-height: 1.5rem;
          color: ${colors.neutral[600]};
        `
      case 'SMALL':
        return `
          font-size: ${fonts.size.xs};
          font-weight: ${fonts.weight.Roman};
          line-height: 1.5rem;
          color: ${colors.neutral[600]};
        `
      case 'TABLE_LABEL':
        return `
          font-size: ${fonts.size.xs};
          font-weight: ${fonts.weight.Black};
          text-transform: uppercase;
          line-height: 1.5rem;
          color: ${colors.neutral[800]};
        `
    }
  }}

  ${({ highlight, variant }) => (['BODY', 'SMALL', 'BUTTON'].includes(variant) && highlight) && `
    font-weight: ${fonts.weight.Heavy};
  `}

  ${({ ellipsis }) => ellipsis && `
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`

const Typography = ({ children, variant, highlight, ellipsis, ...props }) => {
  return (
    <TypographyWrapper
      variant={variant}
      highlight={highlight}
      ellipsis={ellipsis}
      {...props}
    >
      {children}
    </TypographyWrapper>
  )
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(TYPE_TEXT_VARIANTS),
  highlight: PropTypes.bool,
  ellipsis: PropTypes.bool
}

Typography.defaultProps = {
  variant: 'HEADER1',
  children: 'Typography',
  highlight: false,
  ellipsis: false
}

export default Typography
