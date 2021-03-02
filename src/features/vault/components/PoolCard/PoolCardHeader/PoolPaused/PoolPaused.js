import { makeStyles } from '@material-ui/core/styles';
import React, { memo } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolPaused = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.poolPausedContainer}>
      <div className={classes.texts}>{message}</div>
    </div>
  );
};

export default memo(PoolPaused);
