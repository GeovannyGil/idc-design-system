import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { colors, fonts, misc } from '../tokens'
import { Icon } from '../Icon'
import { useSidebarMainContext } from './SidebarContext'
import clsx from 'clsx'

const SidebarNavLinkContent = styled.span`
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.Roman};
  line-height: 16px;
  color: ${colors.neutral[500]};
  transition: all 0.2s all;
`

const SidebarNavLinkIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: auto;
  padding-right: 12px;

  & span svg path{
    fill: ${colors.neutral[500]};
  }
`

const SidebarNavLinkWrapper = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${misc.borderRadius.sm};
  text-decoration: none;
  overflow: hidden;
  transition: all 0.2s ease;
  padding: 6px 10px;

  &.is-collapsed {
    padding: 6px 8px;
  }

  &:hover {
    background-color: ${colors.neutral[100]};

    & ${SidebarNavLinkContent} {
      color: ${colors.primary[700]};
    }

    & ${SidebarNavLinkIcon} {
      & span svg path{
        fill: ${colors.primary[700]};
      }
    }
  }

  &.active {
    background-color: ${colors.primary[100]};

    & ${SidebarNavLinkContent} {
      color: ${colors.primary[400]};
    }

    & ${SidebarNavLinkIcon} {
      & span svg path{
        fill: ${colors.primary[400]};
      }
    }
  }
`

export const SidebarNavLink = ({ icon, label, to }) => {
  const { isCollapsed } = useSidebarMainContext()

  return (
    <SidebarNavLinkWrapper
      to={to} className={clsx({
        'is-collapsed': isCollapsed
      })}
    >
      <SidebarNavLinkIcon>
        {icon}
      </SidebarNavLinkIcon>
      <SidebarNavLinkContent>{label}</SidebarNavLinkContent>
    </SidebarNavLinkWrapper>
  )
}

SidebarNavLink.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

SidebarNavLink.defaultProps = {
  icon: <Icon type='dashboard' />,
  label: 'Home',
  to: '/'
}
