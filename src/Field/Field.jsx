import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FieldContext } from './FieldContext'
import { useIdRef } from '../helpers'

const FieldContainer = styled.div`
  ${({ defaultStyles }) => defaultStyles && `
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  `}
`

export const Field = ({ children, name, error, hint, id, required, defaultStyles, disabled, ...props }) => {
  const generateId = useIdRef('field', id)

  return (
    <FieldContainer defaultStyles={defaultStyles} {...props}>
      <FieldContext.Provider value={{
        error,
        hint,
        name,
        id: generateId,
        required,
        disabled
      }}
      >
        {children}
      </FieldContext.Provider>
    </FieldContainer>
  )
}

Field.defaultProps = {
  error: undefined,
  hint: undefined,
  id: undefined,
  name: '',
  required: false,
  disabled: false,
  defaultStyles: true
}

Field.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultStyles: PropTypes.bool
}
