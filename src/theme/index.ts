import { common } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import GothamTTF from '../fonts/Gotham-Black.otf';
import GothamBoldTTF from '../fonts/Gotham-Bold.otf';

const global = createTheme({
  typography: {
    fontFamily: 'Gotham, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
    background: {
      section: '#121212',
      card: '#100f0f',
      popover: '#282828',
      button: '#242424',
      slider: '#4d4d4d',
    },
    library: {
      list: {
        hover: '#1F1F1F',
        selected: '#2A2A2A',
        hoverOnSelected: '#484848',
      },
    },
    hover: {
      card: '#1a1a1a',
      track: '#2a2a2a',
      popover: '#3E3E3E',
      button: '#1a1a1a',
    },
    text: {
      primary: common.white,
      secondary: '#b3b3b3',
    },
    secondary: {
      main: '#8d8d8d',
      dark: '#100f0f',
      light: '#636363',
    },
    green: '#1cd760',
    grandis: '#FFCC66',
    iris: '#211260',
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
          font-family: 'Gotham';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Gotham'), local('Gotham-Black'), url(${GothamTTF}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Gotham';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Gotham'), local('Gotham-Bold'), url(${GothamBoldTTF}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },

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

        .MuiTooltip-tooltip {
          background: #282828 !important;
        }
      `,
      },
      MuiTooltip: {
        defaultProps: {
          placement: 'top',
          PopperProps: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -10],
                },
              },
            ],
          },
          enterDelay: 400,
          enterNextDelay: 400,
          disableTouchListener: false,
        },
      },
      MuiLink: {
        defaultProps: {
          sx: { cursor: 'pointer' },
        },
      },
      MuiButton: {
        styleOverrides: {
          outlined: {
            color: global.palette.common.white,
            fontWeight: 'bold',
            fontSize: '0.9rem',
            textTransform: 'none',
            backgroundColor: 'transparent',
            borderColor: global.palette.hover.popover,
            borderRadius: 16,
            padding: '3px 15px',
            transition: 'none',

            '&:hover': {
              backgroundColor: 'transparent',
              borderColor: global.palette.common.white,
            },
            '&:active': {
              backgroundColor: 'transparent',
              borderColor: global.palette.common.white,
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
    section: string;
    card: string;
    popover: string;
    button: string;
    slider: string;
  }

  export interface TypeText {
    gray: string;
  }

  export interface Palette {
    grandis: string;
    green: string;
    iris: string;
    hover: {
      card: string;
      track: string;
      popover: string;
      button: string;
    };

    library: {
      list: {
        hover: string;
        selected: string;
        hoverOnSelected: string;
      };
    };
  }
  export interface PaletteOptions {
    grandis: string;
    green: string;
    iris: string;

    hover: {
      card: string;
      track: string;
      popover: string;
      button: string;
    };

    library: {
      list: {
        hover: string;
        selected: string;
        hoverOnSelected: string;
      };
    };
  }

  // export interface PaletteColorOptions {
  //   green?: string;
  //   grandis?: string;
  //   secondary?: {
  //     main?: string;
  //   };
  // }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    grandis: true;
    green: true;
    iris: true;
  }
}
