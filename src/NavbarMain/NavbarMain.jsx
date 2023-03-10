import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, fonts, misc } from '../tokens'
import { Avatar } from '../Avatar'
import { Icon } from '../Icon'
import { SearchBar, SearchForm } from '../SearchBar'
import { Link } from 'react-router-dom'

const ListDropdownOption = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: ${misc.borderRadius.sm};

  &:hover {
    background-color: ${colors.neutral[100]};
  }

  & a {
    text-decoration: none;
    font-size: ${fonts.size.sm};
    font-weight: ${fonts.weight.Roman};
    line-height: 16px;
    color: ${colors.neutral[700]};
  }
`

const ListDropdownOptions = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${colors.base.white};
  border-radius: ${misc.borderRadius.sm};
  border: 1px solid ${colors.neutral[200]};
  box-shadow: ${misc.shadows.base};
  padding: 4px;
  flex-direction: column;
  z-index: 1;
  display: none;
  width: 150px;
  transform: translateY(4px);

  ${({ show }) => show && `
    display: flex;
  `}
`

const ConatinerSearchBar = styled.div`
  width: 100%;
  max-width: 375px;
`

const ButtonDropdownOptions = styled.button`
  background-color: transparent;
  border-radius: ${misc.borderRadius.sm};
  border: 1px solid ${colors.neutral[200]};
  padding: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg path {
    fill: ${colors.neutral[500]};
  }

  &:hover {
    border: 1px solid ${colors.neutral[300]};

    & svg path {
      fill: ${colors.neutral[600]};
    }
  }

  &:active {
    border: 1px solid ${colors.neutral[400]};

    & svg path {
      fill: ${colors.neutral[700]};
    }
  }

  /* &:focus+${ListDropdownOptions} {
    display: flex;
  } */
`

const DropdownUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    font-size: ${fonts.size.sm};
    font-weight: ${fonts.weight.Heavy};
    color: ${colors.neutral[600]};
  }
`

const TitleRoute = styled.span`
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.Black};
  line-height: 1.375rem;
  color: ${colors.neutral[600]};
`

const NavbarMainWrapper = styled.div`
  width: 100%;
  background-color: ${colors.base.white};
  height: 76px;
  padding: 20px 24px;
  border-bottom: 1px solid ${colors.neutral[200]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  /* overflow: hidden; */
`

export const NavbarMain = ({ nameRoute, user, propsSearchForm, ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const onShowDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <NavbarMainWrapper>
      <TitleRoute>
        {nameRoute}
      </TitleRoute>
      <ConatinerSearchBar>
        <SearchForm
          {...propsSearchForm}
        >
          <SearchBar
            fullWidth
            {...props}
          />
        </SearchForm>
      </ConatinerSearchBar>
      <DropdownUser>
        <Avatar src={user.image} alt={user.name} />
        <span>{user.name.split(' ')[0]}</span>
        <ButtonDropdownOptions onClick={onShowDropdown}>
          <Icon type='chevronDown' size={20} />
        </ButtonDropdownOptions>
        <ListDropdownOptions show={showDropdown}>
          <ListDropdownOption>
            <Link to='/user/profile'>Mi perfil</Link>
          </ListDropdownOption>
          <ListDropdownOption>
            <Link to='/'>Cerrar Sesi??n</Link>
          </ListDropdownOption>
        </ListDropdownOptions>
      </DropdownUser>
    </NavbarMainWrapper>
  )
}

NavbarMain.propTypes = {
  nameRoute: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired,
  propsSearchForm: PropTypes.object
}

NavbarMain.defaultProps = {
  nameRoute: 'Dashboard',
  user: {
    name: 'Richard Aitkenhead',
    image: '/images/avatar.jpeg'
  },
  propsSearchForm: {}
}
