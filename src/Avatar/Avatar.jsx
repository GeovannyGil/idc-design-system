import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, fonts, misc } from '../tokens'

const AvatarWrapper = styled.div`
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return `
          width: 24px;
          height: 24px;
          font-size: ${fonts.size.xs};
        `
      case 'md':
        return `
          width: 40px;
          height: 40px;
          font-size: ${fonts.size.md};
        `
      case 'lg':
        return `
          width: 48px;
          height: 48px;
          font-size: ${fonts.size.lg};
        `
      case 'xl':
        return `
          width: 72px;
          height: 72px;
          font-size: ${fonts.size['2xl']};
        `
      case '2xl':
        return `
          width: 96px;
          height: 96px;
          font-size: ${fonts.size['4xl']};
        `
      case 'sm':
      default:
        return `
          width: 32px;
          height: 32px;
          font-size: ${fonts.size.sm};;
        `
    }
  }
  }
  border-radius: ${misc.borderRadius.full};
  ${({ src }) =>
    !src
      ? 'background: linear-gradient(138.89deg, #0053C8 9.35%, #B1D2FF 108.85%);'
    : `
        background-image: url(${src});
        background-size: cover;
        background-position: center;
      `
  }

  color: ${colors.base.white};
  font-weight: ${fonts.weight.Heavy};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Avatar = ({ size, src, alt, ...props }) => {
  const name = alt.split(' ')
  const initials = name.map(name => name[0]).join('')

  return (
    <AvatarWrapper
      size={size}
      src={src}
      alt={alt || ''}
      {...props}
    >
      {
        !src &&
        alt &&
        initials
      }
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  src: PropTypes.string,
  alt: PropTypes.string
}

Avatar.defaultProps = {
  size: 'sm',
  src: '',
  alt: ''
}
