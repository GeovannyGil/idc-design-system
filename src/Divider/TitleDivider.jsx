import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'
import { Divider } from '../Divider'
import { Typography } from '../Typography'

const TitleDividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  ${({ colStart }) => colStart && `grid-column-start: ${colStart};`}
  ${({ colEnd }) => colEnd && `grid-column-end: ${colEnd};`}
`

export const TitleDivider = ({ children, color, ...props }) => {
  return (
    <TitleDividerWrapper {...props}>
      <Typography color={color} variant='TABLE_LABEL' as='h4'>{children}</Typography>
      <Divider background={color} />
    </TitleDividerWrapper>
  )
}

/**
 * The background props is implicitly passed to the Box component
 * Make sure to KEEP this line
 */

TitleDivider.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  colStart: PropTypes.number,
  colEnd: PropTypes.number
}

TitleDivider.defaultProps = {
  color: colors.primary[400]
}
