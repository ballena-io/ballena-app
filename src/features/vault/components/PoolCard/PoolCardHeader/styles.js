const styles = theme => ({
  container: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  details: {
    background: theme.palette.background.primary,
  },
  detailsPaused: {
    background: theme.palette.background.paused,
  },
  detailsRetired: {
    background: theme.palette.background.retired,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px 0 16px',
    width: '100%',
  },
  statsRow: {
    display: 'flex',
    paddingTop: '24px',
  },
});

export default styles;
