import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { StylesTypography } from '../Typography'
import { colors } from '../tokens'

const SubNavLinkWrapper = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 28px;
  text-decoration: none;
  transition: all .2s ease;
  ${StylesTypography('SMALL')}
  line-height: 16px;
  color: ${colors.neutral[700]};

  & .iconWrapper {
    width: 20px;
    height: 20px;

    & path {
      fill: ${colors.neutral[700]};
    }
  }

  &:hover {
    background-color: ${colors.neutral[200]};
    color: ${colors.primary[900]};

    & .iconWrapper path {
      fill: ${colors.neutral[900]};
    }
  }

  &.active {
    background-color: ${colors.primary[100]};
    color: ${colors.primary[400]};
    border-right: 4px solid ${colors.primary[400]};

    & .iconWrapper path {
      fill: ${colors.primary[400]};
    }

  }
`

export const SubNavLink = ({ children, to, icon }) => {
  return (
    <SubNavLinkWrapper
      to={to}
    >
      {icon && icon}
      {children}
    </SubNavLinkWrapper>
  )
}

SubNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  icon: PropTypes.node
}

SubNavLink.defaultProps = {
  children: 'SubNavLink',
  to: '/',
  icon: null
}
