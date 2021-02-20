import { createMuiTheme } from '@material-ui/core/styles';

// Bright Mode:
const BRIGHT_BLUE = '#D8F2FE';
const ACCENT_BLUE = '#49BEFA';
const WHITE_BLUE = '#F4FBFF';
const MEDIUM_BLUE = '#9ADDFE';
const DARK_BROWN = '#512808';

// Dark Mode
const DARK_MODE_BLUE = '#070C12';
const DARK_MODE_MEDIUM_BLUE = '#111D2C';
const DARK_MODE_ACCENT_BLUE = '#00B5EB';
const DARK_MODE_LIGHT_BLUE = '#78D6FF';

const createTheme = isNightMode =>
  createMuiTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? DARK_MODE_BLUE : BRIGHT_BLUE,
        paper: isNightMode ? '#606077' : WHITE_BLUE,
        primary: isNightMode ? DARK_MODE_MEDIUM_BLUE : WHITE_BLUE,
        secondary: isNightMode ? DARK_MODE_MEDIUM_BLUE : MEDIUM_BLUE,
        dark: isNightMode ? DARK_MODE_BLUE : DARK_BROWN,
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? DARK_MODE_BLUE : ACCENT_BLUE,
        border: isNightMode ? DARK_MODE_ACCENT_BLUE : ACCENT_BLUE,
      },
      walletIcon: {
        color: isNightMode ? WHITE_BLUE : DARK_BROWN,
      },
      primary: {
        main: isNightMode ? ACCENT_BLUE : ACCENT_BLUE,
      },
      secondary: {
        main: isNightMode ? WHITE_BLUE : '#F8F2EC',
      },
      text: {
        primary: isNightMode ? DARK_MODE_ACCENT_BLUE : DARK_BROWN,
        secondary: isNightMode ? WHITE_BLUE : DARK_BROWN,
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? WHITE_BLUE : DARK_BROWN,
        },
      },

      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? WHITE_BLUE : DARK_BROWN,
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? WHITE_BLUE : DARK_BROWN,
        },
        colorSecondary: {
          color: isNightMode ? WHITE_BLUE : DARK_BROWN,
        },
      },
    },
  });

export default createTheme;
