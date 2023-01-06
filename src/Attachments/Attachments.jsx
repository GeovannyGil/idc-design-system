import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { colors, misc } from '../tokens'
import { IconButton } from '../IconButton'
import { FILE_TYPES, propertyTypes } from './consts'
import { Link } from 'react-router-dom'

const IconWrapper = styled.div`
  display: flex;
  background-color: ${colors.primary[100]};
  padding: 2px 8px;
  border-radius: ${misc.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
`

const AttachmentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: ${colors.base.white};
  border-radius: ${misc.borderRadius.sm};
  box-shadow: ${misc.shadows.base};
  border: 1px solid ${colors.neutral[100]};
  padding: 12px;

  ${({ type }) => (type === 'directory' && `
    cursor: pointer;
  `)}

  & a {
    text-decoration: none;
  }

  &:hover {
    background-color: ${colors.neutral[100]}40;
  }
`

export const Attachments = ({ type, name, src, description, to, onDownload, onEdit, onDelete }) => {
  const ext = src?.split('.').pop()
  const typeFile = FILE_TYPES[ext] || 'Blank'
  const TypeProperty = propertyTypes[typeFile]

  const handleDownload = () => {
    console.log('Dowload')
    onDownload && onDownload()
  }

  const handleEdit = () => {
    console.log('Edit')
    onEdit && onEdit()
  }

  const handleDelete = () => {
    console.log('Delete')
    onDelete && onDelete()
  }

  if (type === 'directory') {
    return (
      <AttachmentsWrapper
        type={type}
      >
        <Link
          to={type === 'directory' ? to : undefined}
        >
          <Flex
            align='center'
            gap={3}
          >
            <IconWrapper>
              <Icon type='folder' color={colors.primary[500]} size={32} />
            </IconWrapper>
            <Flex direction='column' gap={1}>
              <Typography lineHeight={1.2} variant='BODY' highlight>{name}</Typography>
              <Typography variant='SMALL'>{description}</Typography>
            </Flex>
          </Flex>
        </Link>
        <Flex width='auto' gap={2}>
          <IconButton onClick={handleDownload} icon={<Icon color={colors.neutral[500]} type='download' />} />
          <IconButton onClick={handleEdit} icon={<Icon color={colors.neutral[500]} type='edit' />} />
          <IconButton onClick={handleDelete} icon={<Icon color={colors.neutral[500]} type='trash' />} />
        </Flex>
      </AttachmentsWrapper>
    )
  }

  if (type === 'file') {
    return (
      <AttachmentsWrapper>
        <Flex align='center' gap={3}>
          <IconWrapper>
            <Icon type={`file${typeFile}`} color={TypeProperty.color} size={32} />
          </IconWrapper>
          <Flex direction='column' gap={1}>
            <Typography lineHeight={1.2} variant='BODY' highlight>{name}</Typography>
            <Typography variant='SMALL'>{description}</Typography>
          </Flex>
        </Flex>
        <Flex width='auto' gap={2}>
          <IconButton onClick={handleDownload} icon={<Icon color={colors.neutral[500]} type='download' />} />
          <IconButton onClick={handleEdit} icon={<Icon color={colors.neutral[500]} type='edit' />} />
          <IconButton onClick={handleDelete} icon={<Icon color={colors.neutral[500]} type='trash' />} />
        </Flex>
      </AttachmentsWrapper>
    )
  }
}

Attachments.propTypes = {
  type: PropTypes.oneOf(['directory', 'file']).isRequired,
  to (props) {
    if (props.type === 'directory' && !props.to) {
      return new Error('to must be defined')
    }

    return undefined
  },
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  description: PropTypes.string.isRequired,
  onDownload: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
}
