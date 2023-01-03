import { css } from 'styled-components'
import { colors } from '../tokens'

export const focusStyle = css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${colors.primary[400]};
    }
  }
`

export const focusInputStyle =
  (hasError, rootElement = '&') => css`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      ${'' /* TODO: Refacto this code with double func */}
      ${rootElement}:focus-within {
        ${hasError
          ? `
          border: 1px solid ${colors.danger[500]};
          box-shadow: 0 0 0 2px ${colors.danger[500]};
        `
          : `
          border: 1px solid ${colors.primary[400]};
          box-shadow: 0 0 0 2px ${colors.primary[400]};
        `}
      }
  `
