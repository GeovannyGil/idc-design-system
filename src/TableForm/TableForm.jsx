import { misc, colors } from '../tokens'
import { StylesTypography } from '../Typography'
import styled from 'styled-components'

export const TableForm = styled.table`
  width: 100%;
  border: 1px solid ${colors.primary[400]};
  border-radius: ${misc.borderRadius.sm};
  border-collapse: inherit;
  /* border-collapse: collapse; */
  border-spacing: 0;
  overflow: hidden;
`

export const TheadForm = styled.thead`
  background-color: ${colors.neutral[100]};

  & th {
    padding: 8px 10px;
    text-align: left;
    ${StylesTypography('TABLE_LABEL')}
    color: ${colors.neutral[800]};
    border-bottom: 1px solid ${colors.neutral[300]};
  }
`

export const TbodyForm = styled.tbody`
  & tr td {
    padding: 8px 12px;
    text-align: left;
    ${StylesTypography('SMALL')}
    color: ${colors.neutral[600]};
  }
`
