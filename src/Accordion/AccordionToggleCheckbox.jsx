import React, { useState, useRef, useEffect, forwardRef } from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../tokens'
import { Typography } from '../Typography'
import { Flex } from '../Flex'
import { AccordionContent, AccordionHeaderToggle, AccordionWrapper } from './Accordion'
import { ToggleCheckbox } from '../ToggleCheckbox'

export const AccordionToggleCheckbox = forwardRef(({ title, description, children, optionActive = true, checked, disabled, onChange, ...props }, ref) => {
  const accordionRefContent = useRef(null)
  const [isExpanded, setIsExpanded] = useState(checked)

  useEffect(() => {
    const expandAccordion = optionActive === checked
    setIsExpanded(expandAccordion)
  }, [checked])

  const handleAccordionToggle = (e) => {
    onChange(e)
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
        <ToggleCheckbox
          width='auto'
          disabled={disabled}
          checked={checked}
          onChange={handleAccordionToggle}
          {...props}
          ref={ref}
        />
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
})

AccordionToggleCheckbox.displayName = 'AccordionToggleCheckbox'

AccordionToggleCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  optionActive: PropTypes.bool
}

AccordionToggleCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: undefined
}
