import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const LabeledStat = ({ centerContainer, value, secondValue, label }) => {
  const classes = useStyles();

  return (
    <div className={centerContainer ? classes.centerContainer : classes.container}>
      <Typography className={classes.label} variant="body2">
        {label}
      </Typography>
      <div className={classes.values}>
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
