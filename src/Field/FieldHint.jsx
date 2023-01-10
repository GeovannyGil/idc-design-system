import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../tokens'
import { useField } from './FieldContext'

const HintContent = styled.p`
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
  color: ${colors.neutral[400]};
`

export const FieldHint = () => {
  const { id, hint, error } = useField()

  if (!hint || error) return null

  return (
    <HintContent id={`${id}-hint`}>
      {hint}
    </HintContent>
  )
}

// Field2Hint.propTypes = {
//   children: PropTypes.node
// }

// Field2Hint.defaultProps = {
//   children: ''
// }
