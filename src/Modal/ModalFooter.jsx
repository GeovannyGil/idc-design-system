import React from 'react'
import styled from 'styled-components'
import { colors } from '../tokens'
import { Flex } from '../Flex'
import { Button } from '../Button'
import PropTypes from 'prop-types'

const ModalFooterWrapper = styled.div`
  width: 100%;
  background: ${colors.neutral[100]};
  border-top: 1px solid ${colors.neutral[200]};
  padding: 16px 24px;
`

export const ModalFooter = ({ children, onClose }) => {
  return (
    <ModalFooterWrapper>
      <Flex align='center'>
        <Button variant='tertiary' onClick={onClose}>
          Cancelar
        </Button>
        <Flex align='center'>
          {children}
        </Flex>
      </Flex>
    </ModalFooterWrapper>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
}
