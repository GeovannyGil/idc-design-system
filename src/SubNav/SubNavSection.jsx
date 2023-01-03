import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, fonts } from '../tokens'

const LabelContent = styled.label`
  padding: 8px 16px;
  font-size: ${fonts.size.xs};
  font-weight: ${fonts.weight.Black};
  line-height: 16px;
  color: ${colors.primary[500]};
  text-transform: uppercase;
  transition: all 0.2s all;
`

const SubNavSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubNavSection = ({ label, children }) => {
  return (
    <SubNavSectionWrapper>
      {
        label && <LabelContent>{label}</LabelContent>
      }
      {children}
    </SubNavSectionWrapper>
  )
}

SubNavSection.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
}

SubNavSection.defaultProps = {
  label: '',
  children: ''
}
