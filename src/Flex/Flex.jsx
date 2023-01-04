import styled from 'styled-components'
import PropTypes from 'prop-types'
import spacing from '../tokens/spacing'

export const Flex = styled.div`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  width: ${({ width }) => width};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  flex-shrink: ${({ shrink }) => shrink};
  flex-basis: ${({ basis }) => basis};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => spacing[gap] || gap};
  justify-content: ${({ justify }) => justify};
`

Flex.defaultProps = {
  align: 'flex-start',
  basis: undefined,
  direction: 'row',
  gap: undefined,
  inline: false,
  justify: undefined,
  reverse: false,
  shrink: undefined,
  wrap: undefined,
  width: 'auto'
}

export const flexPropTypes = {
  align: PropTypes.string,
  basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  direction: PropTypes.string,
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string
  ]),
  inline: PropTypes.bool,
  justify: PropTypes.string,
  reverse: PropTypes.bool,
  shrink: PropTypes.number,
  wrap: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
