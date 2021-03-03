const styles = theme => ({
  balleButton: {
    borderRadius: '4px',
    minWidth: '92px',
  },
  balleButtonContained: {
    backgroundColor: theme.palette.balleButton.contained.backgroundColor,
    color: theme.palette.balleButton.contained.color,
    '&:hover': {
      backgroundColor: theme.palette.balleButton.contained.color,
      padding: '0 -1px',
      '& .MuiButton-label': {
        color: theme.palette.balleButton.contained.backgroundColor,
      },
    },
    fontWeight: 'bold',
    height: ' 42px',
  },
  balleButtonOutlined: {
    backgroundColor: 'transparent',
    border: theme.palette.accentBlueBorder,
    color: theme.palette.balleButton.outlined.color,
    fontSize: '13px',
    '&:hover': {
      color: theme.palette.balleButton.contained.backgroundColor,
      backgroundColor: theme.palette.balleButton.outlined.hoverBackgroundColor,
    },
  },
});

export default styles;
