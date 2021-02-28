const styles = theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
  },
  texts: {
    marginLeft: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary.main,
    lineHeight: '18px',
    letterSpacing: 0,
    wordBreak: 'break-word',
    minWidth: '150px',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.text.primary.main,
    lineHeight: '14px',
    letterSpacing: 0,
  },
  image: {
    maxWidth: '60px',
    maxHeight: '60px',
  },
});

export default styles;
