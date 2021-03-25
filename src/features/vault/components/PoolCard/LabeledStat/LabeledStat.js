import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const LabeledStat = ({ alignRight, columnDirection, value, secondValue, label }) => {
  const classes = useStyles();

  return (
    <div
      className={`${columnDirection ? classes.columnContainer : classes.container} ${
        alignRight && classes.alignRight
      }`}
    >
      <Typography className={classes.label} variant="body2">
        {label}
      </Typography>
      <div>
        <Typography className={classes.stat} variant="body2" noWrap>
          {value}
        </Typography>
        {secondValue && (
          <Typography className={classes.stat} variant="body2" noWrap>
            {secondValue}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default memo(LabeledStat);
