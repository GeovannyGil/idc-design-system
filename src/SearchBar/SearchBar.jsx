import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FieldInputContaier } from '../Field/Field'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { colors } from '../tokens'

const IconSearch = styled(Icon)`
  margin: 0 4px;
  & svg path {
    fill: ${colors.neutral[400]};
  }
`

const SearchBarContainer = styled(FieldInputContaier)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.base.white};
  width: 250px;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  & input[type='search']::-webkit-search-decoration {
    appearance: none;
    -webkit-appearance: none;
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return {
          padding: '6px 12px'
        }
      case 'md':
      default:
        return {
          padding: '10px 12px'
        }
    }
  }}

  &:focus-within {
    & ${IconSearch} {
      & svg path {
        fill: ${colors.primary[400]};
      }
    }
  }
`

export const SearchBar = forwardRef(({ name, size, value, onClear, placeholder, disabled, fullWidth, ...props }, ref) => {
  return (
    <>
      <SearchBarContainer
        disabled={disabled}
        aria-disabled={disabled}
        size={size}
        fullWidth={fullWidth}
      >
        <IconSearch type='search' size={18} />
        <input
          type='search'
          placeholder={placeholder}
          disabled={disabled}
          aria-disabled={disabled}
          ref={ref}
          value={value}
          name={name}
          {...props}
        />
        {/* <IconClose type='close' /> */}
      </SearchBarContainer>
    </>
  )
})

SearchBar.displayName = 'SearchBar'

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  value: PropTypes.string,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool
}

SearchBar.defaultProps = {
  name: 'searchbar',
  placeholder: 'Search',
  disabled: false,
  size: 'md',
  value: '',
  onClear: undefined,
  fullWidth: false
}
