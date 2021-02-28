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
    width: '100%',
  },
  statsRow: {
    display: 'flex',
    paddingBottom: '12px',
  },
});

export default styles;
