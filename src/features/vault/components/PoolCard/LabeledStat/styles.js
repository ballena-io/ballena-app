const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '&:not(:last-child)': {
      paddingBottom: '6px',
    },
  },
  columnContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stat: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    lineHeight: '18px',
    letterSpacing: 0,
    padding: '0 8px 4px 0',
  },
  label: {
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    paddingRight: '8px',
  },
  alignRight: {
    textAlign: 'right',
  },
});

export default styles;
