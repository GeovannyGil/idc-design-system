import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, misc, spacing } from '../tokens'
import { Typography } from '../Typography'

const BadgeWrapper = styled.div`
  display: inline-block;
  padding: ${({ padding }) => spacing[padding] ? spacing[padding] : padding || spacing[1]};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};

  & span {
    /* display: inline-block; */
    ${(fullWidth) => fullWidth ? 'width: 100%;' : ''}
  }
  border-radius: ${misc.borderRadius.sm};
  background-color: ${({ color }) => color}10;
  border: 1px solid ${({ color }) => color}20;
`

export const Badge = ({ children, color, textAlign, padding, fullWidth }) => {
  return (
    <BadgeWrapper
      padding={padding}
      fullWidth={fullWidth}
      color={color}
    >
      <Typography textAlign={textAlign} color={color} variant='SMALL'>{children}</Typography>
    </BadgeWrapper>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
}

Badge.defaultProps = {
  children: 'Badge',
  fullWidth: false,
  padding: 1,
  color: colors.primary[400],
  textAlign: 'center'
}
