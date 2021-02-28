const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
  },
  centerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stat: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    padding: '0 8px 4px 0',
  },
  label: {
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.text.secondary,
    lineHeight: '18px',
    letterSpacing: 0,
    paddingRight: '8px',
  },
});

export default styles;
