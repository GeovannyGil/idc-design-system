import React from 'react'
import { Modal } from './Modal'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalContent } from './ModalContent'

export default {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = () => {
  return (
    <Modal>
      <ModalHeader title='Crear nuevo cliente' />
      <ModalContent />
      <ModalFooter />
    </Modal>
  )
}
