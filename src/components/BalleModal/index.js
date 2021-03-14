import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

import styles from './styles';

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitleContainer} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const BalleModal = ({ children, onclose, id, openModal, title }) => {
  return (
    <Dialog onClose={onclose} aria-labelledby={id} open={openModal}>
      <DialogTitle id={id} onClose={onclose}>
        {title}
      </DialogTitle>

      {children}
    </Dialog>
  );
};

export default BalleModal;
