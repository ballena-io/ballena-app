import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolTitle = ({ name, logo, description, url }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img alt={name} className={classes.image} src={require(`../../../../../../images/${logo}`)} />

      <div className={classes.texts}>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {name}
          <Hidden smUp>
            <i
              style={{
                visibility: Boolean(url) ? 'visible' : 'hidden',
              }}
              className={classes.icon + ' far fa-question-circle'}
              onClick={e => {
                e.stopPropagation();
                window.open(url);
              }}
            />
          </Hidden>
        </Typography>
        <Typography className={classes.subtitle} variant="body2">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default memo(PoolTitle);
