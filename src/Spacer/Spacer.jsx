import React from 'react'
import { colors, misc } from '../tokens'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSpacer = styled.div`
  ${({ type, size }) => {
    switch (type) {
      case 'horizontal':
        return `
          height: ${misc.spacing[size]};
          width: 100%;
        `
      case 'vertical':
        return `
          height: 100vh;
          width: ${misc.spacing[size]};
        `
      case 'both':
      default:
        return `
          height: ${misc.spacing[size]};
          width: ${misc.spacing[size]};
        `
    }
  }}

  ${({ maxHeight }) => maxHeight && `
    max-height: ${maxHeight} !important;
  `}

  ${({ isVisible }) => isVisible && `
    border: 2px dashed ${colors.neutral[500]};
  `
  }
`

export const Spacer = ({ size, isVisible, type, maxHeight }) => {
  const sizeValue = size > 11 ? 11 : size
  const maxHeightValue = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight

  return (
    <StyledSpacer size={sizeValue} isVisible={isVisible} type={type} maxHeight={maxHeightValue} />
  )
}

Spacer.displayName = 'Spacer'

Spacer.propTypes = {
  size: PropTypes.number,
  isVisible: PropTypes.bool,
  type: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
  maxHeight: PropTypes.string || PropTypes.number
}

Spacer.defaultProps = {
  size: 4,
  isVisible: false,
  type: 'both',
  maxHeight: '100%'
}
