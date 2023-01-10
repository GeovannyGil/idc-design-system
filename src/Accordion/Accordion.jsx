import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, misc } from '../tokens'
import { Typography } from '../Typography'
import { Flex } from '../Flex'
import { Icon } from '../Icon'

export const AccordionContent = styled.div`
  overflow: hidden;
  max-height: fit-content;
  transition: max-height .8s;
  /* width: 100%; */
  padding: 32px;

  ${({ isExpanded }) => !isExpanded && `
    max-height: 0;
    padding: 0 32px;
  `}
`
/* ${({ isExpanded }) => isExpanded && 'padding: 32px;'} */

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${colors.neutral[200]};
  border-radius: ${misc.borderRadius.full};
  transition: background-color 0.2s ease-in-out;

  & .iconWrapper {
    transition: transform .5s ease-in-out;
  }
`

export const AccordionHeaderToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.neutral[100]};
  border: none;
  padding: 12px 24px;
  gap: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${({ isExpanded }) => isExpanded &&
    `
      background-color: ${colors.primary[100]};

      ${AccordionIcon} {
        background-color: ${colors.alternative[100]};

        & .iconWrapper {
          transform: rotate(180deg);
          transform-origin: center;

          & path {
            fill: ${colors.primary[400]};
          }
        }
      }

      & h3 {
        color: ${colors.primary[400]};
      }

      & p {
        color: ${colors.neutral[400]};
      }
    `
  }
`

export const AccordionWrapper = styled.div`
  background-color: ${colors.base.white};
  display: flex;
  flex-direction: column;
  border-radius: ${misc.borderRadius.sm};
  border: 1px solid ${colors.neutral[300]};
  width: 100%;
  overflow: hidden;

  ${({ isExpanded }) => isExpanded && `border-color: ${colors.primary[400]}`};

  &:hover {
    border-color: ${colors.primary[400]};
  }
`

export const Accordion = ({ title, description, children, expanded }) => {
  const accordionRefContent = useRef(null)
  const [isExpanded, setIsExpanded] = useState(expanded)

  const handleAccordionToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <AccordionWrapper
      isExpanded={isExpanded}
    >
      <AccordionHeaderToggle
        isExpanded={isExpanded}
        onClick={handleAccordionToggle}
      >
        <Flex width='100%' direction='column'>
          <Typography as='h3' color={colors.neutral[700]} variant='HEADER3'>{title}</Typography>
          {
            description && <Typography as='p' color={colors.neutral[500]} variant='BODY'>{description}</Typography>
          }
        </Flex>
        <AccordionIcon>
          <Icon size={18} type='arrowDown' />
        </AccordionIcon>
      </AccordionHeaderToggle>
      <AccordionContent
        isExpanded={isExpanded}
        // style={{ maxHeight: setHeight }}
        ref={accordionRefContent}
      >
        {children}
      </AccordionContent>
    </AccordionWrapper>
  )
}

Accordion.displayName = 'Accordion'

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  expanded: PropTypes.bool
}

Accordion.defaultProps = {
  expanded: false
}
