import React from 'react'
import { SideData } from './SideData'

export default {
  title: 'Component/SideData',
  component: SideData
}

export const Default = () => {
  return (
    <SideData>
      <SideData.Section title='Información'>
        <SideData.Info label='Fecha de creación'>29 de septiembre de 2020</SideData.Info>
        <SideData.Info label='Creado por'>Alonso de la fuente</SideData.Info>
        <SideData.Info label='Asesor'>Maria Victoria Naranjo</SideData.Info>
        <SideData.Info label='Grupo'>Grupo Sagrario</SideData.Info>
      </SideData.Section>
    </SideData>
  )
}

export const Dropdown = () => {
  return (
    <SideData>
      <SideData.Section title='Relación única'>
        <SideData.SubSection title='Representante'>
          <SideData.Item>Payless</SideData.Item>
        </SideData.SubSection>
        <SideData.Dropdown open title='Información'>
          <SideData.Item>Payless</SideData.Item>
          <SideData.Item>Grupo Diveco</SideData.Item>
        </SideData.Dropdown>
      </SideData.Section>
    </SideData>
  )
}
