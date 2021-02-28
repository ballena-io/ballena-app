import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolTitle = ({ name, logo, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img alt={name} className={classes.image} src={require(`../../../../../../images/${logo}`)} />

      <div className={classes.texts}>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.subtitle} variant="body2">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default memo(PoolTitle);
