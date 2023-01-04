import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  border-collapse: collapse;
`

export const Table = () => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Hora y fecha</th>
          <th>Movimiento</th>
          <th>Autor</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10 de Octubre, 11:11 am</td>
          <td>Creación del cliente jurídico Paucek-Bahringer</td>
          <td>Carlos Díaz</td>
          <td>Hola</td>
        </tr>
        <tr>
          <td>5 de Octubre, 01:12 pm</td>
          <td>Modificación de datos del cliente jurídico Rowe-Quitzon</td>
          <td>Leslie Gutierrez</td>
          <td>Hola2</td>
        </tr>
      </tbody>
    </TableContainer>
  )
}
