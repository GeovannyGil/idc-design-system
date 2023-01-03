import React from 'react'
import styled from 'styled-components'
import { SubNav } from './SubNav'
import { SubNavLink } from './SubNavLink'
import { Icon } from '../Icon'
import { SubNavSection } from './SubNavSection'
import { SubNavDropdown } from './SubNavDropdown'
import { SubNavSectionLink } from './SubNavSectionLink'

export default {
  title: 'Component/SubNav',
  component: SubNav
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const Default = () => {
  return (
    <Container>
      <SubNav title='Persona Individual'>
        <SubNavSection>
          <SubNavLink icon={<Icon type='print' />} to='/print'>Imprimir</SubNavLink>
          <SubNavLink icon={<Icon type='history' />} to='/history'>Historial de estados</SubNavLink>
          <SubNavLink icon={<Icon type='folder' />} to='/attachments'>Adjuntos</SubNavLink>
        </SubNavSection>
        <SubNavDropdown title='Documento FEIC' open>
          <SubNavLink to='/dataForm'>Datos del formulario</SubNavLink>
          <SubNavLink to='/dataPersonal'>Datos personales</SubNavLink>
          <SubNavLink to='/pepClient'>Datos PEP del cliente</SubNavLink>
          <SubNavLink to='/actionClient'>Actuación del cliente</SubNavLink>
          <SubNavLink to='/infoEconomic'>Información económica</SubNavLink>
        </SubNavDropdown>
        <SubNavSectionLink to='/fatca'>Documento FATCA</SubNavSectionLink>
        <SubNavSectionLink to='/products'>Productos y servicios</SubNavSectionLink>
        <SubNavSectionLink to='/signatures'>Datos de firmantes</SubNavSectionLink>
        <SubNavSectionLink to='/benefitiaries'>Datos de beneficiarios</SubNavSectionLink>
        <SubNavSectionLink to='/identificationValidation'>Cédula de verificación y validación</SubNavSectionLink>
        <SubNavSectionLink to='/kycForm'>KYC FORM</SubNavSectionLink>
      </SubNav>
      <SubNav title='Persona Jurídica'>
        <SubNavSection>
          <SubNavLink icon={<Icon type='print' />} to='/print'>Imprimir</SubNavLink>
          <SubNavLink icon={<Icon type='history' />} to='/history'>Historial de estados</SubNavLink>
          <SubNavLink icon={<Icon type='folder' />} to='/attachments'>Adjuntos</SubNavLink>
        </SubNavSection>
        <SubNavDropdown title='Documento FEIC' open>
          <SubNavLink to='/dataForm'>Datos del formulario</SubNavLink>
          <SubNavLink to='/dataPersonal'>Datos representante legal</SubNavLink>
          <SubNavLink to='/infoEconomic'>Información económica</SubNavLink>
        </SubNavDropdown>
        {/* <SubNavSection> */}
        <SubNavSectionLink to='/fatca'>Documento FATCA</SubNavSectionLink>
        <SubNavSectionLink to='/products'>Productos y servicios</SubNavSectionLink>
        <SubNavSectionLink to='/signatures'>Datos de firmantes</SubNavSectionLink>
        <SubNavSectionLink to='/kycForm'>KYC FORM</SubNavSectionLink>
        <SubNavSectionLink to='/identificationValidation'>Cédula de verificación y validación</SubNavSectionLink>
        <SubNavSectionLink to='/benefitiariesFinal'>Beneficiario final</SubNavSectionLink>
        {/* </SubNavSection> */}
      </SubNav>
      <SubNav title='Empresa'>
        <SubNavSection label='Administración usuarios'>
          <SubNavLink icon={<Icon type='show' />} to='/roles'>Roles</SubNavLink>
          <SubNavLink icon={<Icon type='userCircle' />} to='/users'>Usuarios</SubNavLink>
        </SubNavSection>
        <SubNavSection label='Administración empresa'>
          <SubNavLink icon={<Icon type='business' />} to='/bussines'>Empresas</SubNavLink>
          <SubNavLink icon={<Icon type='store' />} to='/agency'>Agencias</SubNavLink>
          <SubNavLink icon={<Icon type='landmark' />} to='/mandatary'>Mandatarios</SubNavLink>
          <SubNavLink icon={<Icon type='editAlt' />} to='/represent'>Representante legal CVN</SubNavLink>
          <SubNavLink icon={<Icon type='idCard' />} to='/verification'>Responsable cédula de verificación</SubNavLink>
          <SubNavLink icon={<Icon type='boxes' />} to='/typeProducts'>Tipo de producto</SubNavLink>
          <SubNavLink icon={<Icon type='package' />} to='/products'>Producto</SubNavLink>
          <SubNavLink icon={<Icon type='mapPin' />} to='/countrys'>Países</SubNavLink>
          <SubNavLink icon={<Icon type='purchaseTag' />} to='/timesState'>Estados</SubNavLink>
          <SubNavLink icon={<Icon type='graduation' />} to='/profesions'>Profesiones</SubNavLink>
          <SubNavLink icon={<Icon type='group' />} to='/groups'>Grupos</SubNavLink>
        </SubNavSection>
      </SubNav>
    </Container>

  )
}
