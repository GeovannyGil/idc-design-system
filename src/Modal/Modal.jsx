import React, { useRef  } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, misc, spacing } from '../tokens'

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  background: ${colors.neutral[800]}F;
  padding: 0 ${spacing[8]};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  box-shadow: ${misc.shadows.base};
  background-color: ${colors.base.white};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          width: ${600 / 16}rem;
        `
      case 'lg':
        return `
          width: ${1200 / 16}rem;
        `
      case 'md':
      default:
        return `
          width: ${830 / 16}rem;
        `
    }
  }}
`

export const Modal = ({ children, size }) => {
  const ref = useRef(null)

  return (
    <ModalWrapper
      ref={ref}
    >
      <ModalContainer size={size}>
        {children}
      </ModalContainer>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

Modal.defaultProps = {
  size: 'md'
}
