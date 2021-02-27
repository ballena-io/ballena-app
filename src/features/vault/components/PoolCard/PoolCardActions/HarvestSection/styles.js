import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  showDetailLeft: {
    float: 'left',
    marginBottom: '10px',
    fontSize: '1rem',
    lineHeight: '20px',
    color: theme.palette.text.secondary,
    fontWeight: '500',
  },
  showResponsiveButtonCon: {
    width: '160px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '100px',
    },
  },
  showDetailButton: {
    fontWeight: 'bold',
    borderRadius: '4px',
  },
  showDetailButtonOutlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: primaryColor[0],
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
      '& .MuiButton-label': {
        color: theme.palette.background.containedButtonHover,
      },
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: primaryColor[0],
    },
  },
  showDetailButtonContained: {
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    wordBreak: 'break-word',
    minWidth: '150px',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.text.secondary,
    lineHeight: '20px',
    letterSpacing: 0,
  },
});

export default styles;
