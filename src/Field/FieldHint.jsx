import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const HintContent = styled.p`
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
  color: var(--color-neutral-400);
`

export const FieldHint = ({ hint }) => {
  return (
    <HintContent>
      {hint}
    </HintContent>
  )
}

FieldHint.propTypes = {
  hint: PropTypes.string.isRequired
}

FieldHint.defaultProps = {
  hint: ''
}
