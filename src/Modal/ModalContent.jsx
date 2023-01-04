import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalContentWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`

export const ModalContent = ({ children }) => {
  return (
    <ModalContentWrapper>
      ModalContent
    </ModalContentWrapper>
  )
}

ModalContent.propTypes = {
  children: PropTypes.node
}
