const styles = theme => ({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  textContainer: {
    padding: '16px',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontWeight: 900,
    width: '100%',
  },
  disclaimer: {
    background: theme.palette.background.secondary,
    color: theme.palette.text.primary,
  },
  constructionMode: {
    background: '#F72322',
    color: '#fff',
  },
});

export default styles;
