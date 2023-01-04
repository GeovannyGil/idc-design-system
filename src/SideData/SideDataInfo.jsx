import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../tokens'
import { Typography } from '../Typography'

const SideDataInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 8px;

  & > label {
    width: 40%;
  }

  & > p {
    width: 60%;
  }
`

export const SideDataInfo = ({ label, children }) => {
  return (
    <SideDataInfoWrapper>
      <Typography as='label' variant='SMALL' color={colors.neutral[600]} highlight>{label}</Typography>
      <Typography as='p' variant='SMALL' color={colors.neutral[600]} textAlign='right'>{children}</Typography>
    </SideDataInfoWrapper>
  )
}

SideDataInfo.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
