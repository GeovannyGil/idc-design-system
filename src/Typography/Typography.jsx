import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'
import { StylesTypography, ellipsisStyle } from './utils'

const TypographyWrapper = styled.span`
  display: inline-block;
  font-size: 1rem;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ variant, highlight }) => StylesTypography(variant, highlight)}
  ${({ color }) => color && `color: ${color};`}
  ${({ ellipsis }) => ellipsis && ellipsisStyle(ellipsis)}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`

export const Typography = ({ as, children, textTransform, textAlign, variant, highlight, ellipsis, color, ...props }) => {
  return (
    <TypographyWrapper
      as={as}
      variant={variant}
      highlight={highlight}
      ellipsis={ellipsis}
      color={color}
      textTransform={textTransform}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </TypographyWrapper>
  )
}

Typography.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['HEADER1', 'HEADER2', 'HEADER3', 'SUBTITLE', 'BODY', 'BUTTON', 'SMALL', 'TABLE_LABEL']),
  highlight: PropTypes.bool,
  ellipsis: PropTypes.bool,
  color: PropTypes.string,
  textTransform: PropTypes.string,
  textAlign: PropTypes.string
}

Typography.defaultProps = {
  as: 'span',
  variant: 'BODY',
  children: 'Typography',
  highlight: false,
  ellipsis: false,
  color: colors.neutral[800],
  textTransform: 'none',
  textAlign: 'left'
}
