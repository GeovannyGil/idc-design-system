import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../tokens'
import { Typography } from '../Typography'

const ContainerLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  height: calc(100% - 96px);
`

const SubNavHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 16px;
  height: 96px;
  overflow: hidden;

  & span{
    padding-right: 3rem;
    overflow: auto;
  }

  & div{
    height: 1px;
    width: 100%;
    background-color: ${colors.neutral[200]};
  }
`

export const subNavWidth = `${232 / 16}rem`

const SubNavWrapper = styled.div`
  min-width: ${subNavWidth};
  width: ${subNavWidth};
  background: ${colors.neutral[100]};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid ${colors.neutral[200]};
  z-index: 1;
  padding: 12px 0 12px 12px;
`

export const SubNav = ({ title, children }) => {
  return (
    <SubNavWrapper>
      <SubNavHeader>
        <Typography color={colors.neutral[800]} variant='HEADER2'>{title}</Typography>
        <div />
      </SubNavHeader>
      <ContainerLinks>
        {children}
      </ContainerLinks>
    </SubNavWrapper>
  )
}

SubNav.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

SubNav.defaultProps = {
  title: 'SubNav',
  children: null
}
