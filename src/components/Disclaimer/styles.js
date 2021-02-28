const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  disclaimer: {
    padding: '16px',
    borderRadius: '4px',
    background: theme.palette.background.secondary,
    marginBottom: '1rem',
    fontWeight: 900,
    color: theme.palette.text.primary,
    width: '100%',
  },
});

export default styles;
