import React from 'react'
import { NavbarMain } from './NavbarMain'
import styled from 'styled-components'

export default {
  title: 'Component/NavbarMain',
  component: NavbarMain
}

const ContainerNavBarMain = styled.div`
  width: 100%;
  padding: 56px;
  height: 100vh;
  background-color: #f5f5f5;
`

export const base = () => {
  const [search, setSearch] = React.useState('')
  return (
    <ContainerNavBarMain>
      <NavbarMain value={search} onChange={(e) => setSearch(e.target.value)} />
    </ContainerNavBarMain>
  )
}
