const styles = theme => ({
  container: {
    borderRadius: '8px',
    padding: '8px',
    margin: '8px 0 2rem',
    border: '2px solid ' + theme.palette.background.border,
    backgroundColor: theme.palette.background.primary,
    justifyContent: 'space-between',
  },

  selectorContainer: {
    width: '100%',
  },

  selectorLabel: {
    color: theme.palette.text.secondary,
    marginBottom: '10px',
  },

  selector: {
    padding: '0',
    margin: '0',
  },

  label: {
    color: theme.palette.text.primary,
  },
});

export default styles;
