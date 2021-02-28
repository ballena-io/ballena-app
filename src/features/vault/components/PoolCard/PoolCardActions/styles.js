import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& + &': {
      marginLeft: '5px',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  showDetailButton: {
    fontWeight: 'bold',
    borderRadius: '4px',
  },
  showDetailButtonContained: {
    backgroundColor: primaryColor[0],
    '&:hover': {
      backgroundColor: theme.palette.background.containedButtonHover,
      '& .MuiButton-label': {
        color: theme.palette.background.hover,
      },
    },
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
});

export default styles;
