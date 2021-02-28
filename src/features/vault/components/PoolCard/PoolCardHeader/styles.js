const styles = theme => ({
  dataContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    padding: '0 0 12px 8px',
    minHeight: '72px',
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
});

export default styles;