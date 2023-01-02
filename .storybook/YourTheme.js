import { create } from '@storybook/theming'
import { colors } from '../src/tokens'

export default create({
  base: 'light',
  colorPrimary: colors.primary[500],

  appBg: colors.neutral[100],
  appBorderColor: colors.neutral[200],
  appBorderRadius: 4,

  // Toolbar default and active colors
  barTextColor: colors.primary[400],
  barSelectedColor: colors.primary[500],
  barBg: colors.neutral[100],

  brandTitle: 'IDC FORM DESIGN SYSTEM',
  brandUrl: 'https://idcform-ds.geovannygil.dev',
  brandImage: '/images/brandImage.png',
  brandTarget: '_self',
});
