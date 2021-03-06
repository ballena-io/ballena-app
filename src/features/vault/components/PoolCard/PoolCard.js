import { Card, CardActions, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BigNumber from 'bignumber.js';
import { byDecimals } from 'features/helpers/bignumber';
import React, { memo } from 'react';

import PoolCardActions from './PoolCardActions/PoolCardActions';
import PoolCardContent from './PoolCardContent/PoolCardContent';
import PoolCardHeader from './PoolCardHeader/PoolCardHeader';
import styles from './styles';

const useStyles = makeStyles(styles);

const PoolCard = ({ pool, index, tokens, apy }) => {
  const classes = useStyles();

  let balanceSingle = byDecimals(tokens[pool.token].tokenBalance, pool.tokenDecimals);
  let sharesBalance = new BigNumber(tokens[pool.earnedToken].tokenBalance);

  return (
    <Card
      className={[
        classes.container,
        pool.status === 'eol'
          ? classes.detailsRetired
          : pool.depositsPaused
          ? classes.detailsPaused
          : classes.details,
      ]}
    >
      <PoolCardHeader pool={pool} />

      <CardContent>
        <PoolCardContent pool={pool} apy={apy} />
      </CardContent>

      <CardActions>
        <PoolCardActions
          pool={pool}
          balanceSingle={balanceSingle}
          sharesBalance={sharesBalance}
          index={index}
        />
      </CardActions>
    </Card>
  );
};

export default memo(PoolCard);
