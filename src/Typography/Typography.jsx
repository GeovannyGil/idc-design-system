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
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ ellipsis }) => ellipsis && ellipsisStyle(ellipsis)}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  transition: all 0.2s ease-in-out;
`

export const Typography = ({ as, children, lineHeight, textTransform, textAlign, variant, highlight, ellipsis, color, ...props }) => {
  return (
    <TypographyWrapper
      as={as}
      variant={variant}
      highlight={highlight}
      ellipsis={ellipsis}
      color={color}
      textTransform={textTransform}
      textAlign={textAlign}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </TypographyWrapper>
  )
}

Typography.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['HEADER1', 'HEADER2', 'HEADER3', 'SUBTITLE', 'BODY', 'BUTTON', 'SMALL', 'TABLE_LABEL']),
  highlight: PropTypes.bool,
  ellipsis: PropTypes.bool,
  color: PropTypes.string,
  textTransform: PropTypes.string,
  textAlign: PropTypes.string,
  lineHeight: PropTypes.number
}

Typography.defaultProps = {
  as: 'span',
  variant: 'BODY',
  children: 'Typography',
  highlight: false,
  ellipsis: false,
  color: colors.neutral[800],
  textTransform: 'none',
  textAlign: 'left',
  lineHeight: 1.5
}
