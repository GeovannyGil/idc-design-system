import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'
import { useField } from './FieldContext'

const ErrorContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
  color: ${colors.danger[600]};
  display: flex;
  align-items: center;
  gap: 2px;
`

export const FieldError = () => {
  const { id, error } = useField()

  if (!error || typeof error !== 'string') return null

  return (
    <ErrorContent id={`${id}-error`} data-idc-field-error>
      {error}
    </ErrorContent>
  )
}

// Field2Error.propTypes = {
//   children: PropTypes.node
// }

// Field2Error.defaultProps = {
//   children: ''
// }
