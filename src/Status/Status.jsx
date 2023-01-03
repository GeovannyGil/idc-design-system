import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { colors, misc } from '../tokens'

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & div {
    width: 6px;
    height: 6px;
    border-radius: ${misc.borderRadius.full};
    background-color: ${({ color }) => color};
  }

  & label {
    line-height: 1.2;
  }
`

export const Status = ({ color, state }) => {
  return (
    <StatusBadge color={color}>
      <div />
      <Typography color={color} as='label' variant='SMALL'>{state}</Typography>
    </StatusBadge>
  )
}

Status.propTypes = {
  color: PropTypes.string,
  state: PropTypes.string
}

Status.defaultProps = {
  color: colors.neutral[500],
  state: 'Pending'
}
