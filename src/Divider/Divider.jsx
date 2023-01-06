import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'
import { TitleDivider } from './TitleDivider'

const DividerWrapper = styled.div`
  height: ${({ height }) => height};
  border: none;
  ${({ unsetMargin }) => (unsetMargin ? 'margin: 0;' : '')}
  ${({ background }) => `background-color: ${background};`}
  width: 100%;

  // Only grid
  ${({ colStart }) => colStart && `grid-column-start: ${colStart};`}
  ${({ colEnd }) => colEnd && `grid-column-end: ${colEnd};`}
`

export const Divider = ({ unsetMargin, ...props }) => <DividerWrapper {...props} as='hr' unsetMargin={unsetMargin} />

/**
 * The background props is implicitly passed to the Box component
 * Make sure to KEEP this line
 */

Divider.propTypes = {
  background: PropTypes.string,
  unsetMargin: PropTypes.bool,
  height: PropTypes.string,
  colStart: PropTypes.number,
  colEnd: PropTypes.number
}

Divider.defaultProps = {
  unsetMargin: true,
  background: colors.neutral[200],
  height: '1px'
}

Divider.Title = TitleDivider
