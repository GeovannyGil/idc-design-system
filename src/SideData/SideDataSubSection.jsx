import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { Spacer } from '../Spacer'
import { Flex } from '../Flex'
import { colors } from '../tokens'

const SideDataSubSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SideDataSubSection = ({ title, children }) => {
  return (
    <SideDataSubSectionWrapper>
      {
        title && (
          <Flex padding='8px' direction='column' gap={1}>
            <Typography color={colors.neutral[800]} highlight variant='SMALL'>{title}</Typography>
            <Spacer type='horizontal' size={2} />
          </Flex>
        )
      }
      <ContainerItems>
        {children}
      </ContainerItems>
    </SideDataSubSectionWrapper>
  )
}

SideDataSubSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

SideDataSubSection.defaultProps = {
  title: ''
}
