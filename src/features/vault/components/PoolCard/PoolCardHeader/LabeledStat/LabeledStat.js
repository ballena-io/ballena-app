import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const LabeledStat = ({ value, label, xs, md }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.label} variant="body2">
        {label}
      </Typography>
      <Typography className={classes.stat} variant="body2" noWrap>
        {value}
      </Typography>
    </div>
  );
};

export default memo(LabeledStat);
