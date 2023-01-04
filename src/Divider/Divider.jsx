import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'

const DividerWrapper = styled.div`
  height: 1px;
  border: none;
  ${({ unsetMargin }) => (unsetMargin ? 'margin: 0;' : '')}
  ${({ background }) => `background-color: ${background};`}
  width: 100%;
`

export const Divider = ({ unsetMargin, ...props }) => <DividerWrapper {...props} as='hr' unsetMargin={unsetMargin} />

/**
 * The background props is implicitly passed to the Box component
 * Make sure to KEEP this line
 */

Divider.propTypes = {
  background: PropTypes.string,
  unsetMargin: PropTypes.bool
}

Divider.defaultProps = {
  unsetMargin: true,
  background: colors.neutral[200]
}
