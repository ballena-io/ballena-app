import { createMuiTheme } from '@material-ui/core/styles';

// Bright Mode:
const BRIGHT_BLUE = '#D8F2FE';
const ACCENT_BLUE = '#49BEFA';
const WHITE_BLUE = '#F4FBFF';
const MEDIUM_BLUE = '#9ADDFE';
const DARK_BROWN = '#512808';

const createTheme = isNightMode =>
  createMuiTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? '#242332' : BRIGHT_BLUE,
        paper: isNightMode ? '#606077' : '#fff',
        primary: isNightMode ? '#505067' : WHITE_BLUE,
        secondary: isNightMode ? '#3B3A4D' : MEDIUM_BLUE,
        dark: isNightMode ? '#2B2A3D' : DARK_BROWN,
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : ACCENT_BLUE,
        border: isNightMode ? '#2B2A3D' : ACCENT_BLUE,
      },
      primary: {
        main: isNightMode ? '#fff' : ACCENT_BLUE,
      },
      secondary: {
        main: isNightMode ? '#fff' : '#F8F2EC',
      },
      text: {
        primary: isNightMode ? '#fff' : DARK_BROWN,
        secondary: isNightMode ? '#B0B0DD' : '#00000066',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#fff' : DARK_BROWN,
        },
      },

      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#fff' : DARK_BROWN,
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#fff' : DARK_BROWN,
        },
        colorSecondary: {
          color: isNightMode ? '#fff' : DARK_BROWN,
        },
      },
    },
  });

export default createTheme;
