import React from 'react'
import { Portal } from './Portal'

export default {
  title: 'Technical/Portal',
  component: Portal,
  parameters: {
    docs: {
      description: {
        component: 'Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.'
      }
    },
    status: {
      type: 'beta'
    }
  }
}

export const Default = () => (
  <div>
    <p>This is a paragraph that is a child of the div.</p>
    <Portal><p>This is a paragraph that is a child of the Portal.</p></Portal>
  </div>
)
