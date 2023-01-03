import React from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'
import { mapIcon } from './helpers'
import styled from 'styled-components'

const IconWrapper = styled(ReactSVG)`
  display: inline-block;
  /* width: 24px;
  height: 24px; */
  padding: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  flex-basis: ${({ size }) => size}px;
  flex-shrink: 0;
  flex-grow: 0;

  /* min-height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px; */

  & span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`

export const Icon = ({ type, size, className, ...props }) => {
  console.log('Icon', size)
  return (
    <IconWrapper
      src={mapIcon(type)}
      wrapper='span'
      size={size}
      className={'iconWrapper ' + className}
    />
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number
}

Icon.defaultProps = {
  type: 'loader',
  className: '',
  size: 24
}
