import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../tokens'
import { StylesTypography } from '../Typography'
import { Icon } from '../Icon'

const SubNavContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  max-height: fit-content;
  transition: max-height .8s;

  ${({ isOpen }) => !isOpen && `
    max-height: 0;
  `}
`

const SubNavContenTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  ${StylesTypography('TABLE_LABEL')}
  color: ${colors.primary[500]};
  cursor: pointer;
  transition: all .2s ease;
  line-height: 16px;

  &:hover {
    background-color: ${colors.neutral[200]};
  }

  & .iconWrapper {
    pointer-events: none;
    transition: all .4s ease;

    ${({ isOpen }) => isOpen && `
      transform: rotate(180deg);
      transform-origin: center;
    `}
  }
`

const SubNavDropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SubNavDropdown = ({ children, title, collapsable, open }) => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <SubNavDropdownWrapper
      collapsable={collapsable}
    >
      <SubNavContenTitle
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {title} <Icon size={10} type='arrowUp' />
      </SubNavContenTitle>
      <SubNavContent
        isOpen={isOpen}
      >
        {children}
      </SubNavContent>
    </SubNavDropdownWrapper>
  )
}

SubNavDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  collapsable: PropTypes.bool,
  open: PropTypes.bool
}

SubNavDropdown.defaultProps = {
  children: '',
  title: '',
  collapsable: true,
  open: false
}
