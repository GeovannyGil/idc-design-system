import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'
import { Typography } from '../Typography'
import { colors } from '../tokens'

const ModalHeaderWrapper = styled.div`
  width: 100%;
  background: ${colors.neutral[100]};
  border-bottom: 2px solid ${colors.neutral[200]};
  padding: 16px 24px;
`

export const ModalHeader = ({ title, description }) => {
  return (
    <ModalHeaderWrapper>
      <Flex direction='column'>
        <Typography variant='BODY' highlight>
          {title}
        </Typography>
        {
          description &&
            <Typography variant='SMALL'>
              {description}
            </Typography>
        }
      </Flex>
    </ModalHeaderWrapper>
  )
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}
