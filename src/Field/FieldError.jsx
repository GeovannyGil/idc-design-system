import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'

const ErrorContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
  color: ${colors.danger[600]};
  display: flex;
  align-items: center;
  gap: 2px;
`

const FieldError = ({ error }) => {
  return (
    <ErrorContent>
      {error}
    </ErrorContent>
  )
}

FieldError.propTypes = {
  error: PropTypes.string.isRequired
}

FieldError.defaultProps = {
  error: ''
}

export default FieldError
