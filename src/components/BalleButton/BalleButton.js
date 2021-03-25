import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const BalleButton = ({ children, className, onClick, isOutlined, disabled }) => {
  const classes = useStyles();

  const styles = [
    className,
    classes.balleButton,
    isOutlined ? classes.balleButtonOutlined : classes.balleButtonContained,
  ];

  return (
    <Button color="primary" className={styles} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default BalleButton;
