const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
  },
  stat: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
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
