import { colors, fonts } from '../tokens'

export const TypographyVariants = {
  HEADER1: `
    font-size: ${fonts.size['4xl']};
    font-weight: ${fonts.weight.Black};
    line-height: 2.5rem;
    color: ${colors.neutral[800]};
  `,
  HEADER2: `
    font-size: ${fonts.size.lg};
    font-weight: ${fonts.weight.Black};
    line-height: 1.375rem;
    color: ${colors.neutral[800]};
  `,
  HEADER3: `
    font-size: ${fonts.size.md};
    font-weight: ${fonts.weight.Heavy};
    line-height: 1.25rem;
    color: ${colors.neutral[800]};
  `,
  SUBTITLE: `
    font-size: ${fonts.size.md};
    font-weight: ${fonts.weight.Medium};
    line-height: 1.5rem;
    color: ${colors.neutral[600]};
  `,
  BODY: `
    font-size: ${fonts.size.sm};
    font-weight: ${fonts.weight.Roman};
    line-height: 1.5rem;
    color: ${colors.neutral[600]};
  `,
  SMALL: `
    font-size: ${fonts.size.xs};
    font-weight: ${fonts.weight.Roman};
    line-height: 1rem;
    color: ${colors.neutral[600]};
  `,
  TABLE_LABEL: `
    font-size: ${fonts.size.xs};
    font-weight: ${fonts.weight.Black};
    text-transform: uppercase;
    line-height: 1.5rem;
    color: ${colors.neutral[800]};
  `
}

export const StylesTypography = (variant, highlight, ellipsis) => {
  let styles = ''
  // Variants Typography
  if (!variant || !TypographyVariants[variant]) styles = TypographyVariants.BODY
  if (variant === 'BUTTON') styles = TypographyVariants.BODY
  if (TypographyVariants[variant]) styles = TypographyVariants[variant]

  // highlight Typography
  if (['BODY', 'SMALL', 'BUTTON'].includes(variant) && highlight) {
    styles = `${styles}\tfont-weight: ${fonts.weight.Heavy};`
  }

  // ellipsis Typography
  if (ellipsis) {
    styles = `${styles}\tdisplay: block;\toverflow: hidden;\ttext-overflow: ellipsis;\twhite-space: nowrap;`
  }
  // console.log(variant, styles)
  return styles
}

export const ellipsisStyle = (ellipsis) =>
  ellipsis &&
    `
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `
