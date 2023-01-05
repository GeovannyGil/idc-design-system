import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { colors, misc } from '../tokens'

export const StatusBadge = styled.div`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  align-items: center;
  gap: 8px;

  ${({ isBox, color }) => isBox && `
    padding: 16px 16px;
    border-radius: ${misc.borderRadius.sm};
    background-color: ${color}10;
    border: 1px solid ${color}20;
  `}

  & div {
    width: 6px;
    height: 6px;
    border-radius: ${misc.borderRadius.full};
    background-color: ${({ color }) => color};
    flex-shrink: 0;
  }

  & label {
    line-height: 1.2;
  }
`

export const Status = ({ color, state, isBox, inline, fullWidth }) => {
  return (
    <StatusBadge
      color={color}
      isBox={isBox}
      inline={inline}
      fullWidth={fullWidth}
    >
      <div />
      <Typography highlight color={color} as='label' variant='SMALL'>{state}</Typography>
    </StatusBadge>
  )
}

Status.propTypes = {
  color: PropTypes.string,
  state: PropTypes.string,
  isBox: PropTypes.bool,
  inline: PropTypes.bool,
  fullWidth: PropTypes.bool
}

Status.defaultProps = {
  color: colors.neutral[500],
  state: 'Pending',
  isBox: false,
  inline: false,
  fullWidth: false
}
