import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, misc } from '../tokens'
import { SideDataSection } from './SideDataSection'
import { SideDataInfo } from './SideDataInfo'
import { SideDataDropdown } from './SideDataDropdown'
import { SideDataItem } from './SideDataItem'
import { SideDataSubSection } from './SideDataSubSection'

const SideDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: ${misc.shadows.base};
  border: .5px solid ${colors.neutral[200]};
  border-radius: ${misc.borderRadius.sm};
  background-color: ${colors.base.white};
  padding: 16px;
  gap: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '280px'};
`

export const SideData = ({ children, fullWidth }) => {
  return (
    <SideDataWrapper
      fullWidth={fullWidth}
    >
      {children}
    </SideDataWrapper>
  )
}

SideData.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool
}

SideData.defaultProps = {
  fullWidth: false
}

SideData.Section = SideDataSection
SideData.Info = SideDataInfo
SideData.Dropdown = SideDataDropdown
SideData.Item = SideDataItem
SideData.SubSection = SideDataSubSection
