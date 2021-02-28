const styles = theme => ({
  container: {
    background: theme.palette.background.primary,
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: '8px',
    margin: '8px',
    width: 300,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

export default styles;
