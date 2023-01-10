import React from 'react'
import { TableForm, TheadForm, TbodyForm } from './TableForm'

export default {
  title: 'Component/TableForm'
}

export const Default = () => {
  return (
    <TableForm>
      <TheadForm>
        <tr>
          <th>Tipo de transacción</th>
          <th>0 - 3</th>
          <th>4 - 6</th>
          <th>+ de 6</th>
        </tr>
      </TheadForm>
      <TbodyForm>
        <tr>
          <td>Inversión</td>
          <td>Check</td>
          <td>Check</td>
          <td>Check</td>
        </tr>
      </TbodyForm>
    </TableForm>
  )
}
