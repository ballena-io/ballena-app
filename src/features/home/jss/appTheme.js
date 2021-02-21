import { createMuiTheme } from '@material-ui/core/styles';

// Bright Mode:
const BRIGHT_BLUE = '#D8F2FE';
const ACCENT_BLUE = '#49BEFA';
const WHITE_BLUE = '#EBF8FF';
const MEDIUM_BLUE = '#9ADDFE';
const DARK_BLUE = '#1D3149';

// Dark Mode
const DARK_MODE_MEDIUM_BLUE = '#111D2C';
const DARK_MODE_ACCENT_BLUE = '#00B5EB';

const createTheme = isNightMode =>
  createMuiTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? DARK_BLUE : BRIGHT_BLUE,
        paper: isNightMode ? DARK_BLUE : WHITE_BLUE,
        primary: isNightMode ? DARK_MODE_MEDIUM_BLUE : WHITE_BLUE,
        secondary: isNightMode ? DARK_MODE_MEDIUM_BLUE : MEDIUM_BLUE,
        dark: isNightMode ? DARK_BLUE : DARK_BLUE,
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? DARK_BLUE : ACCENT_BLUE,
        border: isNightMode ? DARK_MODE_ACCENT_BLUE : ACCENT_BLUE,
      },
      walletIcon: {
        color: isNightMode ? WHITE_BLUE : DARK_BLUE,
      },
      primary: {
        main: isNightMode ? ACCENT_BLUE : ACCENT_BLUE,
      },
      secondary: {
        main: isNightMode ? WHITE_BLUE : WHITE_BLUE,
      },
      text: {
        primary: isNightMode ? DARK_MODE_ACCENT_BLUE : DARK_BLUE,
        secondary: isNightMode ? WHITE_BLUE : DARK_BLUE,
      },
    },
    overrides: {
      MuiAccordion: {
        rounded: {
          '&:last-child': {
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          },
          '&:first-child': {
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          },
        },
      },
      MuiButton: {
        base: {
          borderRadius: '8px',
        },
        label: {
          color: isNightMode ? WHITE_BLUE : DARK_BLUE,
        },
      },

      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? WHITE_BLUE : DARK_BLUE,
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? WHITE_BLUE : DARK_BLUE,
        },
        colorSecondary: {
          color: isNightMode ? WHITE_BLUE : DARK_BLUE,
        },
      },
    },
  });

export default createTheme;
