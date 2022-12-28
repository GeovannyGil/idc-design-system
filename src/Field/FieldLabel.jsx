import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'

const LabelContent = styled.label`
  display: block;
  font-size: .75rem;
  line-height: 1.33;
  font-weight: 600;
  color: ${colors.neutral[700]};

  ${({ required }) =>
  required && {
    '&::after': {
      content: '"*"',
      color: colors.danger[600]
      // marginLeft: '0.25rem'
    }
  }}
`

const FieldLabel = ({ labelText, required }) => {
  return (
    <LabelContent required={required} className='input__label'>
      {labelText}
    </LabelContent>
  )
}

FieldLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool
}

FieldLabel.defaultProps = {
  labelText: '',
  required: false
}

export default FieldLabel
