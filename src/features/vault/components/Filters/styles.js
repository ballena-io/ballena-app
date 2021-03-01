const styles = theme => ({
  container: {
    display: 'flex',
    padding: '8px 4px',
    margin: '8px 0 8px',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
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
    minWidth: '100px',
  },
});

export default styles;
