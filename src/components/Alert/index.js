import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import BalleButton from 'components/BalleButton/BalleButton';
import React, { useState } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.container} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Alert = ({ description, link, title }) => {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(true);

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handleOnClickButton = () => {
    return window.open(link, '_blank');
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="alert" open={openAlert}>
      <div className={classes.container}>
        <DialogTitle id="alert" onClose={handleClose}>
          {title}
        </DialogTitle>
        <div className={classes.content}>{description}</div>
        <div className={classes.content}>
          <BalleButton onClick={handleOnClickButton}>Docs</BalleButton>
        </div>
      </div>
    </Dialog>
  );
};

export default Alert;
