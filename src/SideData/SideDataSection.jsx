import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { Divider } from '../Divider'
import { Spacer } from '../Spacer'
import { Flex } from '../Flex'
import { colors } from '../tokens'

const SideDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SideDataSection = ({ title, children }) => {
  return (
    <SideDataWrapper>
      {
        title && (
          <Flex direction='column' gap={1}>
            <Typography color={colors.neutral[600]} Typography variant='TABLE_LABEL'>{title}</Typography>
            <Divider />
            <Spacer type='horizontal' size={2} />
          </Flex>
        )
      }
      <ContainerItems>
        {children}
      </ContainerItems>
    </SideDataWrapper>
  )
}

SideDataSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

SideDataSection.defaultProps = {
  title: ''
}
