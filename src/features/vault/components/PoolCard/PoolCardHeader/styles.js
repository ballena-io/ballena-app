const styles = theme => ({
  container: {
    alignItems: 'center',
    padding: '16px 16px 8px 16px',
  },
  dataContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    padding: '0 0 12px 8px',
    minHeight: '72px',
  },
});

export default styles;
