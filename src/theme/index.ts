import { common } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import CircularBlack from '../fonts/Circular-Black.otf';
import CircularMedium from '../fonts/Circular-Medium.otf';
import CircularLight from '../fonts/Circular-Light.otf';

const global = createTheme({
  typography: {
    fontFamily: 'Circular, sans-serif',

    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1ED760',
    },
    background: {
      main: '#121212',
      secondary: '#282828',
      slider: '#4d4d4d',
    },
    hover: {
      main: '#1F1F1F',
      secondary: '#3e3e3e',
      track: '#2a2a2a',
      dark: '#1e1e1e',
      library: '#484848',
      chip: '#333333',
    },
    text: {
      primary: common.white,
    },
    secondary: {
      main: '#b0b0b0',
    },
  },
  shape: {
    borderRadius: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default createTheme(
  {
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Circular Black';
          font-style: normal;
          font-display: swap;
          font-weight: 500, 600, 700;
          src: local('Circular Black'), url(${CircularBlack}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Circular Medium';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Circular Medium'), url(${CircularMedium}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Circular Light';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Circular Light'), url(${CircularLight}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        body {
          background-color: ${global.palette.common.black}
        }

        ::-webkit-scrollbar {
          display: none;
        }

        * {
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }
      `,
      },
      MuiTooltip: {
        defaultProps: {
          placement: 'top',
          enterDelay: 600,
          leaveDelay: 0,
          enterNextDelay: 600,
          disableFocusListener: true,
          disableTouchListener: true,
          TransitionProps: {
            exit: false,
          },
        },
        styleOverrides: {
          tooltip: {
            borderRadius: '3px',
            fontSize: '0.8rem',
            fontWeight: 'normal',
            backgroundColor: global.palette.background.secondary,
            boxShadow: global.shadows[10],
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: global.palette.hover.track,
            ':hover': {
              backgroundColor: global.palette.hover.chip,
            },
            '&.active': {
              backgroundColor: global.palette.common.white,
              color: global.palette.common.black,
              fontWeight: '400',
            },
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          variant: 'transparent',
          disableRipple: true,
        },
        variants: [
          {
            props: { variant: 'filled' },
            style: {
              backgroundColor: global.palette.hover.track,
              ':hover': {
                backgroundColor: global.palette.hover.chip,
              },
            },
          },
          {
            props: { variant: 'fill-on-hover' },
            style: {
              backgroundColor: 'transparent',
              ':hover': {
                backgroundColor: global.palette.hover.chip,
                color: global.palette.common.white,
              },
            },
          },
          {
            props: { variant: 'transparent' },
            style: {
              backgroundColor: 'transparent',
              ':hover': {
                color: global.palette.common.white,
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            color: global.palette.secondary.main,
            width: '32px',
            height: '32px',
            padding: 0,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.truncate && {
              display: '-webkit-box',
              WebkitLineClamp: ownerState.truncate,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }),
          }),
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            '.MuiPaper-root': {
              borderRadius: '4px',
              padding: '4px',
              backgroundColor: global.palette.background.secondary,
              backgroundImage: 'none',
            },
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          rail: {
            color: global.palette.background.slider,
          },
          track: ({ ownerState }) => ({
            backgroundColor: ownerState.active ? global.palette.primary.main : global.palette.common.white,
            border: 'unset',
          }),
          thumb: ({ ownerState }) => ({
            width: '12px',
            height: '12px',
            opacity: ownerState.active ? 1 : 0,
            backgroundColor: global.palette.common.white,

            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              backgroundColor: global.palette.common.white,
              boxShadow: 'none',
            },

            '&:before, &:after': {
              content: 'unset',
            },
          }),
          root: {
            height: 4,
            '&:hover .MuiSlider-track': {
              backgroundColor: global.palette.primary.main,
            },
            '&:hover .MuiSlider-thumb': {
              opacity: 1,
            },

            '&, &>*': {
              transition: 'none !important',
            },
          },
        },
      },
    },
  },
  global,
);

declare module '@mui/material/styles' {
  export interface BreakpointOverrides {
    xxl: true;
  }

  export interface TypeBackground {
    main: string;
    secondary: string;
    slider: string;
  }

  export interface Palette {
    hover: {
      main: string;
      secondary: string;
      track: string;
      dark: string;
      library: string;
      chip: string;
    };
  }
  export interface PaletteOptions {
    hover: {
      main: string;
      secondary: string;
      track: string;
      dark: string;
      library: string;
      chip: string;
    };
  }
}

declare module '@mui/material' {
  interface SvgIconPropsColorOverrides {
    grandis: true;
    green: true;
    iris: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'filled' | 'fill-on-hover' | 'transparent';
  }
}

declare module '@mui/material/Typography' {
  export interface TypographyOwnProps {
    truncate?: number;
  }
  export interface MuiTypographyProps {
    truncate?: number;
  }
}

declare module '@mui/material/Slider' {
  export interface SliderOwnProps {
    active?: boolean;
  }
  export interface MuiSliderProps {
    active?: boolean;
  }
}
