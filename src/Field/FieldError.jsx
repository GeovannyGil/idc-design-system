import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
const { tokens } = require('../../consts/tokens')

const ErrorContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
  color: var(--color-danger-600);
  display: flex;
  align-items: center;
  gap: 2px;

  & svg path {
    fill: var(--color-danger-600);
  }
`

export const FieldError = ({ error }) => {
  return (
    <ErrorContent>
      <Icon type='warning' color={tokens.color.danger[600]} />{error}
    </ErrorContent>
  )
}

FieldError.propTypes = {
  error: PropTypes.string.isRequired
}

FieldError.defaultProps = {
  error: ''
}
