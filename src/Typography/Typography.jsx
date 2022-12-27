import React from 'react'
import './Typography.css'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { TYPE_TEXT_VARIANTS } from './constants'

export const Typography = ({ children, variant, highlight, ellipsis, ...props }) => {
  // const Tag = TAGS_VARIANTS[variant]

  return (
    <span
      className={clsx(
        'typography',
        `typography--${variant}`,
        highlight && 'typography--highlight',
        ellipsis && 'typography--ellipsis'
      )}
      {...props}
    >
      {children}
    </span>
  )
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(TYPE_TEXT_VARIANTS),
  highlight: PropTypes.bool,
  ellipsis: PropTypes.bool
}

Typography.defaultProps = {
  variant: 'HEADER1',
  children: 'Typography',
  highlight: false,
  ellipsis: false
}
