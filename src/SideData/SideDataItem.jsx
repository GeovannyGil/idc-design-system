import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { Flex } from '../Flex'
import { IconButton } from '../IconButton'
import { Icon } from '../Icon'
import { colors } from '../tokens'

const SideDataItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  gap: 8px;

  &:hover {
      background-color: ${colors.primary[100]};
  }
`

export const SideDataItem = ({ children, trash, remove, edit }) => {
  return (
    <SideDataItemWrapper>
      <Typography variant='BODY'>{children}</Typography>
      <Flex width='auto' gap={1}>
        {
          edit?.onClick && <IconButton icon={<Icon color={colors.neutral[500]} border={false} size={20} type='edit' />} {...edit} />
        }
        {
          remove?.onClick && <IconButton icon={<Icon color={colors.neutral[500]} border={false} size={20} type='minusCircle' />} {...remove} />
        }
        {
          trash?.onClick && <IconButton icon={<Icon color={colors.neutral[500]} border={false} size={20} type='trash' />} {...trash} />
        }
      </Flex>
    </SideDataItemWrapper>
  )
}

SideDataItem.propTypes = {
  children: PropTypes.node.isRequired,
  trash: PropTypes.object,
  remove: PropTypes.object,
  edit: PropTypes.object
}
