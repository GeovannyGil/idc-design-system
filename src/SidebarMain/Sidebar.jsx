import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { colors, fonts, misc } from '../tokens'
import { Icon } from '../Icon'
import { SideBarMainContext } from './SidebarContext'

const SidebarButttonCollapse = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(12px) translateY(20px);
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  background-color: ${colors.base.white};
  border: 1px solid ${colors.neutral[200]};
  border-radius: ${misc.borderRadius.sm};
  cursor: pointer;

  & svg path {
    fill: ${colors.neutral[400]};
    transition: all 0.2s ease;

    ${({ collapsed }) => collapsed && `
        transform: rotate(180deg);
        transform-origin: center;
    `}
  }

  &:hover {
    & svg path {
      fill: ${colors.neutral[500]};
    }
  }

  &:active {
    border: 1px solid ${colors.neutral[300]};
    & svg path {
      fill: ${colors.neutral[600]};
      transform: translateX(1px) translateY(1px);
    }
  }
`

const SidebarInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  padding-left: 8px;
  transition: all 0.2s ease;
  overflow: hidden;
  white-space: nowrap;

  & h1 {
    font-size: ${fonts.size.sm};
    font-weight: ${fonts.weight.Heavy};
    color: ${colors.primary[500]};
    line-height: 16px;
  }

  & span {
    font-size: ${fonts.size.xs};
    font-weight: ${fonts.weight.Roman};
    color: ${colors.neutral[400]};
    line-height: 16px;
  }
`

const SidebarLogo = styled.div`
  min-width: 34px;

  img {
    width: 100%;
  }
`

const SidebarBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  /* gap: 8px; */
  padding: 20px 16px;
  width: 100%;
  height: 76px;
  border-bottom: 1px solid ${colors.neutral[200]};
`

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  height: calc(100% - 76px);
`

const SidebarWrapper = styled.nav`
  position: relative;
  height: 100vh;
  background-color: ${colors.base.white};
  position: sticky;
  border-right: 1px solid ${colors.neutral[200]};
  z-index: ${misc.zIndex[20]};
  transition: all 0.2s ease;

  ${({ condensed }) =>
  !condensed
    ? 'max-width: 225px;'
    : `
      max-width: 65px;
    `
  }
`

export const SidebarMain = ({ collapsed, to, children }) => {
  const { condensed, setCondensed } = collapsed
  const onCollapse = () => {
    setCondensed(!condensed)
  }

  return (
    <SideBarMainContext.Provider value={condensed}>
      <SidebarWrapper condensed={condensed}>
        <SidebarBrand>
          <SidebarLogo>
            <NavLink to={to}>
              <img src='/images/logo.svg' alt='logo' />
            </NavLink>
          </SidebarLogo>
          <SidebarInfoHeader>
            <h1>IDC FORMS</h1>
            <span>Workplace</span>
          </SidebarInfoHeader>
        </SidebarBrand>
        <SidebarLinks>
          {children}
        </SidebarLinks>
        <SidebarButttonCollapse onClick={onCollapse} collapsed={condensed}>
          <Icon type='chevronLeft' />
        </SidebarButttonCollapse>
      </SidebarWrapper>
    </SideBarMainContext.Provider>
  )
}

SidebarMain.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  collapsed: PropTypes.object
}

SidebarMain.defaultProps = {
  to: '/',
  children: null,
  collapsed: {}
}
