import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#3140FF',
      alt: '#000000',
    },
    background: {
      default: '#fff',
      secondary: '#F4F5F5',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#FF0000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 830,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
  },
});

const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: pxToRem(24),
      },
      elevation2: {
        boxShadow: '0px 16px 24px rgba(148, 148, 148, 0.11)',
      },
    },
    MuiTextField: {
      root: {
        minWidth: pxToRem(200),
      },
    },
    MuiCard: {
      root: {
        borderRadius: pxToRem(9),
      },
    },
    MuiTypography: {
      h1: {
        textTransform: 'uppercase',
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontWeight: 'bold',
        fontSize: pxToRem(41),
        letterSpacing: '0.2em',
        [breakpoints.down('md')]: {
          fontSize: pxToRem(34),
        },
        [breakpoints.down('sm')]: {
          fontSize: pxToRem(27),
        },
      },
      h2: {
        textTransform: 'uppercase',
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(27),
        color: 'black',
        letterSpacing: '.2em',
        fontWeight: 'bold',
        [breakpoints.down('sm')]: {
          fontSize: pxToRem(24),
        },
      },
      h3: {
        textTransform: 'uppercase',
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(16),
        color: 'black',
        letterSpacing: '.2em',
        fontWeight: 'bold',
        [breakpoints.down('md')]: {
          fontSize: pxToRem(20),
        },
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(16),
        },
      },
      h4: {
        textTransform: 'uppercase',
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(14),
        color: 'black',
        letterSpacing: '.2em',
        fontWeight: 'bold',
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(12),
        },
      },
      h5: {
        textTransform: 'uppercase',
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontWeight: 'bold',
        fontSize: pxToRem(27),
      },
      h6: {
        textTransform: 'uppercase',
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontWeight: 'bold',
        fontSize: pxToRem(20),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(14),
        },
      },
      subtitle1: {
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(12),
        letterSpacing: '.2em',
        fontWeight: 'bold',
      },
      subtitle2: {
        fontFamily: ['Work Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(12),
        [breakpoints.down('md')]: {
          fontSize: pxToRem(10),
        },
        [breakpoints.down('sm')]: {
          fontSize: pxToRem(14),
        },
      },
      body1: {
        fontFamily: ['Work Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(18),
        [breakpoints.down('sm')]: {
          fontSize: pxToRem(16),
        },
      },
      body2: {
        fontFamily: ['Work Sans', 'sans-serif'].join(','),
        fontSize: pxToRem(16),
        [breakpoints.down('sm')]: {
          fontSize: pxToRem(18),
        },
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(14),
        },
      },
      button: {
        fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
        fontWeight: 'bold',
        fontSize: pxToRem(16),
        letterSpacing: '.2em',
        [breakpoints.down('sm')]: {
          fontSize: pxToRem(14),
        },
      },
    },
  },
};

export default theme;
