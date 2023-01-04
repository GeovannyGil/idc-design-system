import React from 'react'
import { Table } from './Table'

export default {
  title: 'Component/Table',
  component: Table,
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = () => {
  return (
    <Table />
  )
}
