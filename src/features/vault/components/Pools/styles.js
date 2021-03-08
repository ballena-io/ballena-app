const styles = theme => ({
  container: {
    paddingTop: '4px',
    width: '100%',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  titles: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '32px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  titleLoader: {
    marginLeft: '12px',
  },
  subtitles: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  subtitle: {
    fontSize: '14px',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '16px',
    },
    fontWeight: '550',
    color: theme.palette.text.secondary,
  },
});

export default styles;
