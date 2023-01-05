import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { colors } from '../tokens'
import { Icon } from '../Icon'
import { StylesTypography } from '../Typography'

const SubNavSectionLinkWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  max-width: 100%;
  text-decoration: none;
  ${StylesTypography('TABLE_LABEL')}
  line-height: 16px;
  color: ${colors.primary[500]};
  cursor: pointer;
  transition: all .2s ease;
  /* gap: 4px; */

  & label {
    width: 90%;
    cursor: pointer;
  }

  /* & .iconWrapper {
    width: 10px;
    height: 10px;
  } */

  &:hover {
    background-color: ${colors.neutral[200]};
  }

  &.active {
    background-color: ${colors.neutral[200]};
  }
`

export const SubNavSectionLink = ({ children, to }) => {
  return (
    <SubNavSectionLinkWrapper
      to={to}
    >
      <label>{children}</label> <Icon size={10} type='arrowRight' />
    </SubNavSectionLinkWrapper>
  )
}

SubNavSectionLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

SubNavSectionLink.defaultProps = {
  children: 'SubNavSectionLink',
  to: '/'
}
