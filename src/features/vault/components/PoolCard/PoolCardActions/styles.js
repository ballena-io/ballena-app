import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
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
  footer: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
  },
  showDetailButton: {
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
    fontWeight: 'bold',
    marginRight: '12px',
    height: ' 42px',
  },
  showDetailButtonOutlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: primaryColor[0],
    fontSize: '12px',
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
  statsActionsRow: {
    display: 'flex',
    paddingBottom: '12px',
    justifyContent: 'start',
    alignItems: 'center',
  },
});

export default styles;
