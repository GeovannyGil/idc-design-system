import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { StylesTypography } from '../Typography'
import { colors, misc } from '../tokens'

const SideDataContent = styled.div`
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

const SideDataContentTitle = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  /* justify-content: space-between; */
  gap: 4px;
  padding: 8px;
  cursor: pointer;
  border-radius: ${misc.borderRadius.sm};
  ${StylesTypography('SMALL', true)}
  color: ${colors.primary[800]};
  line-height: 16px;
  transition: all .2s ease;

  &:hover {
    background-color: ${colors.neutral[100]};
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

const SideDataDropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SideDataDropdown = ({ open, title, children }) => {
  const childrenCount = React.Children.count(children)
  const [isOpen, setIsOpen] = useState(open)

  return (
    <SideDataDropdownWrapper>
      <SideDataContentTitle
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {title} ({childrenCount}) <Icon color={colors.neutral[800]} size={10} type='arrowUp' />
      </SideDataContentTitle>
      <SideDataContent
        isOpen={isOpen}
      >
        {children}
      </SideDataContent>
    </SideDataDropdownWrapper>
  )
}

SideDataDropdown.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool
}
