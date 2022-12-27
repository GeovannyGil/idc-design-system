const tokens = {
  color: {
    primary: {
      100: '#F1F7FF',
      200: '#569FFF',
      300: '#016FFF',
      400: '#004AAB',
      500: '#002554',
      600: '#002351',
      700: '#00204A',
      800: '#001B3F',
      900: '#001838'
    },
    secondary: {
      100: '#CDE9F4',
      200: '#B3DEEF',
      300: '#9AD3EA',
      400: '#81C8E4',
      500: '#66BDDF',
      600: '#32A6D3',
      700: '#227EA2',
      800: '#17546C',
      900: '#0B2A36'
    },
    alternative: {
      100: '#CFD9EB',
      200: '#B8C6E0',
      300: '#A0B3D6',
      400: '#88A0CC',
      500: '#728EC2',
      600: '#496CAB',
      700: '#375181',
      800: '#253656',
      900: '#121B2B'
    },
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    success: {
      700: '#2F6846',
      600: '#328048',
      500: '#5CB176',
      200: '#C6F0C2',
      100: '#EAFBE7'
    },
    danger: {
      700: '#B72B1A',
      600: '#D02B20',
      500: '#EE5E52',
      200: '#F5C0B8',
      100: '#FCECEA'
    },
    warning: {
      700: '#BE5D01',
      600: '#D9822F',
      500: '#F29D41',
      200: '#FAE7B9',
      100: '#FDF4DC'
    },
    base: {
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem'
  },
  screens: {
    xs: '420px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    max: {
      xs: '419px',
      sm: '639px',
      md: '767px',
      lg: '1023px',
      xl: '1279px'
    }
  },
  fontFamily: {
    serif: ['Roboto Slab', '"Times New Roman"', 'serif'],
    sans: ['Apercu', 'Arial', 'sans-serif'],
    mono: ['"Roboto Mono"', 'Consolas', 'monospace'],
    avenir: ['Avenir', 'Arial', 'sans-serif']
  },
  fontSize: {
    base: '10px',
    xs: '.75rem',
    sm: '.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem'
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1'
  },
  shadows: {
    none: 'none',
    base: '0px 1px 4px rgba(33, 33, 52, 0.1)',
    md: '0px 1px 7px rgba(33, 33, 52, 0.1)',
    lg: '0px 2px 15px rgba(33, 33, 52, 0.1)',
    xl: ' 0px 5px 18px rgba(33, 33, 52, 0.15), 0px 0px 1px rgba(33, 33, 52, 0.31)',
    innerBase: 'inset 0px 2px 4px rgba(33, 33, 52, 0.06)'
  },
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px'
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  }
}

module.exports = { tokens }
