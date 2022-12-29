import React, { useState } from 'react'
import styled from 'styled-components'
import { SidebarMain } from './Sidebar'
import { SidebarNavLink } from './SidebarNavLink'
import { SidebarSection } from './SidebarSection'
import { Icon } from '../Icon'

export default {
  title: 'Component/SidebarMain',
  component: SidebarMain
}

const ContainerSidebar = styled.div`
  width: 100%;
  padding: 56px;
  height: 100vh;
  background-color: #f5f5f5;
`

export const base = () => {
  const [condensed, setCondensed] = useState(false)
  return (
    <ContainerSidebar>
      <SidebarMain collapsed={{ condensed, setCondensed }}>
        <SidebarSection>
          <SidebarNavLink to='/dashboard' icon={<Icon type='dashboard' />} label='Inicio' />
        </SidebarSection>
        <SidebarSection label='General'>
          <SidebarNavLink to='/clientes' icon={<Icon type='user' />} label='Clientes' />
          <SidebarNavLink to='/business' icon={<Icon type='business' />} label='Empresa' />
          <SidebarNavLink to='/reports' icon={<Icon type='report' />} label='Reportes' />
          <SidebarNavLink to='/config' icon={<Icon type='config' />} label='Configuración' />
        </SidebarSection>
      </SidebarMain>
    </ContainerSidebar>
  )
}
