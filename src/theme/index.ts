import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import GothamTTF from "../fonts/Gotham-Black.otf";
import GothamBoldTTF from "../fonts/Gotham-Bold.otf";

export default createTheme({
  typography: {
    fontFamily: "Gotham, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: common.black,
      paper: common.black,
      section: "#121212",
      card: "#100f0f",
      cardHover: "#181818",
      purple: "#381861",
      popover: "#282828",
      popoverHighlight: "#3E3E3E",
    },
    text: {
      primary: common.white,
      secondary: "#b3b3b3",
      gray: "#3d3b40",
    },
    secondary: {
      main: "#b3b3b3",
      dark: "#100f0f",
      light: "#242424",
      light2: "#4d4c4c",
    },
    container: {
      main: "#121212",
    },
    section: "#121212",
    green: {
      main: "#1cd760",
    },
    grandis: "#FFCC66",
    white: "#ffffff",
    black: "#000000",
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
        placement: "top",
        PopperProps: {
          modifiers: [
            {
              name: "offset",
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
        sx: { cursor: "pointer" },
      },
    },
  },
});

declare module "@mui/material/styles" {
  export interface BreakpointOverrides {
    xxl: true;
  }

  export interface TypeBackground {
    section: string;
    card: string;
    cardHover: string;
    purple: string;
    popover: string;
    popoverHighlight: string;
  }
  export interface PaletteColor {
    light2: string;
  }
  export interface TypeText {
    gray: string;
  }

  export interface Palette {
    container: {
      main: string;
    };
    grandis: string;
    black: string;
    white: string;
    green: {
      main: string;
    };
    section: string;
  }
  export interface PaletteOptions {
    container: {
      main: string;
    };
    grandis: string;
    black: string;
    white: string;
    green: {
      main: string;
    };
    section: string;
  }

  export interface PaletteColorOptions {
    section?: string;
    main?: string;
    dark?: string;
    light?: string;
    light2?: string;
    green?: string;
    black?: string;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    black: true;
    green: true;
  }
}
