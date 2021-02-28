const styles = theme => ({
  container: {
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: '8px',
    margin: '0 16px 16px 0',
    maxWidth: 300,
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
