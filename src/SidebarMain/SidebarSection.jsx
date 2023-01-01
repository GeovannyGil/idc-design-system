import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, fonts } from '../tokens'
import { useSidebarMainContext } from './SidebarContext'

const DividerSidebar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.neutral[200]};
`

const LabelContent = styled.label`
  padding: 4px 14px;
  font-size: ${fonts.size.xs};
  font-weight: ${fonts.weight.Heavy};
  line-height: 16px;
  color: ${colors.neutral[400]};
  text-transform: uppercase;
  transition: all 0.2s all;
`

const SidebarSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & ${LabelContent} {
    ${({ isCollapsed }) => !isCollapsed ? 'display: block;' : 'display: none;'}
  }
`

export const SidebarSection = ({ label, children }) => {
  const { isCollapsed } = useSidebarMainContext()

  return (
    <SidebarSectionWrapper isCollapsed={isCollapsed}>
      {
        label && <LabelContent>{label}</LabelContent>
      }
      {
        (isCollapsed && label) && <DividerSidebar />
      }
      {children}
    </SidebarSectionWrapper>
  )
}

SidebarSection.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
}

SidebarSection.defaultProps = {
  label: '',
  children: ''
}
