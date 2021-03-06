const styles = theme => ({
  alignRight: {
    textAlign: 'right',
  },
  dialogTitleContainer: {
    margin: 0,
    padding: theme.spacing(2),
  },
  balances: {
    display: 'flex',
    justifyContent: 'space-between',
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
    color: theme.palette.ACCENT_BLUE,
  },
  footer: {
    width: '100%',
  },
  retiredWithdrawButton: {
    backgroundColor: 'white',
    width: '100%',
  },
  statsActionsRow: {
    display: 'flex',
    paddingBottom: '12px',
    flexDirection: 'column',
  },
});

export default styles;
