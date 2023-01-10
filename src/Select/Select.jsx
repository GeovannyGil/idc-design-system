import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts, misc } from '../tokens'
import { Icon } from '../Icon'
import { FieldInput } from '../Field'

const SelectTagItem = styled.div`
  background-color: ${colors.neutral[100]};
  border-radius: 2px;
  padding: 2px 4px;
  display: flex;
  align-items: center;

  color: ${colors.primary[400]};
  font-size: ${fonts.size.xs};
  font-weight: ${fonts.weight.Roman};
  line-height: 16px;

  transition: all 0.2s ease;


  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & svg path {
      fill: ${colors.neutral[500]};
    }
  }

  &:hover {
    background-color: ${colors.neutral[200]};
  }

  & span:hover {
    & svg path {
      fill: ${colors.danger[600]};
    }
  }
`

const SelectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const SelectItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: ${misc.borderRadius.sm};
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.Roman};
  line-height: 16px;
  color: ${colors.neutral[700]};

  &:hover {
    background-color: ${colors.neutral[100]};
  }

  ${({ selected }) => selected && `
    color: ${colors.primary[400]};
  `}
`

const SelectSearch = styled.div`
  padding: 8px 0;
  width: 100%;
`

const SelectMenu = styled.div`
  position: absolute;
  transform: translateY(8px);
  width: 100%;
  box-shadow: ${misc.shadows.base};
  border-radius: ${misc.borderRadius.sm};
  padding: 4px;
  overflow: auto;
  max-height: 150px;
  background-color: ${colors.base.white};
`

const SelectTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg path {
    fill: ${colors.neutral[500]};
  }
`
const SelectTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SelectedValue = styled.div`
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.Roman};
  line-height: 16px;
  color: ${colors.neutral[400]};

  ${({ selected }) => selected && `
      color: ${colors.neutral[700]};
    `
  }
`

const SelectInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
        padding: 8px 16px;
      `
      default:
        return `
        padding: 11px 16px;
      `
    }
  }
  }
`

const SelectWrapper = styled.div`
  text-align: left;
  border: 1px solid ${colors.neutral[200]};
  position: relative;
  border-radius: ${misc.borderRadius.sm};
  cursor: pointer;
  width: 100%;

  &:focus-within {
    border: 1px solid ${colors.primary[400]};
    box-shadow: 0 0 0 2px ${colors.primary[400]};
  }
`

// TODO: Implement required
export const Select = ({ size, placeholder, required, options, isMulti, isSercheable, onChange, label, hint, error, ...props }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null)
  const [searchValue, setSearchValue] = useState('')
  const searchRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    setSearchValue('')
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  const onSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const getOptions = () => {
    if (!searchValue) {
      return options
    }

    return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  })

  const handleInputClick = (e) => {
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeholder
    }

    if (isMulti) {
      return (
        <SelectTags>
          {
            selectedValue.map((option) => (
              <SelectTagItem key={option.value}>
                {option.label}
                <span onClick={(e) => onTagRemove(e, option)}><Icon type='close' size={14} /></span>
              </SelectTagItem>
            ))
          }
        </SelectTags>
      )
    }

    return selectedValue.label
  }

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value)
  }

  const onTagRemove = (e, option) => {
    e.stopPropagation()
    const newValue = removeOption(option)
    setSelectedValue(newValue)
    onChange(newValue)
  }

  const onItemClick = (option) => {
    let newValue
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option)
      } else {
        newValue = [...selectedValue, option]
      }
    } else {
      newValue = option
    }
    setSelectedValue(newValue)
    onChange(newValue)
  }

  const isSelected = (option) => {
    if (isMulti && selectedValue && selectedValue.length > 0) {
      return selectedValue.filter((o) => o.value === option.value).length > 0
    }

    if (!selectedValue) {
      return false
    }

    return selectedValue.value === option.value
  }

  return (
    <SelectWrapper>
      <SelectInput ref={inputRef} onClick={handleInputClick} size={size}>
        <SelectedValue selected={selectedValue !== null && selectedValue?.length !==
          0}
        >{getDisplay()}
        </SelectedValue>
        <SelectTools>
          <SelectTool>
            <Icon type='arrowDown' size={12} />
          </SelectTool>
        </SelectTools>
      </SelectInput>
      {
        showMenu &&
          <SelectMenu>
            {
            isSercheable &&
              <SelectSearch>
                <FieldInput placeholder='Buscar...' value={searchValue} onChange={onSearch} ref={searchRef} />
              </SelectSearch>
          }
            {
            getOptions().map((option) => (
              <SelectItem
                key={option.value}
                onClick={() => onItemClick(option)}
                selected={isSelected(option)}
              >
                {option.label}
              </SelectItem>
            ))
          }
          </SelectMenu>
      }
    </SelectWrapper>
  )
}

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  size: PropTypes.oneOf(['sm', 'md']),
  isMulti: PropTypes.bool,
  isSercheable: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.string
}

Select.defaultProps = {
  placeholder: 'Select',
  options: [],
  size: 'md',
  isMulti: false,
  isSercheable: false,
  onChange: undefined,
  error: undefined,
  label: undefined,
  required: false,
  hint: undefined
}
