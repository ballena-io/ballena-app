import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PoolCardHeaderActions from './PoolCardHeaderActions/PoolCardHeaderActions';
import PoolPaused from './PoolPaused/PoolPaused';
import PoolTitle from './PoolTitle/PoolTitle';
import styles from './styles';

const useStyles = makeStyles(styles);

const PoolCardHeader = ({ pool }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const vaultStateTitle = (status, paused) => {
    let state =
      status === 'eol'
        ? t('Vault-DepositsRetiredTitle')
        : paused
        ? t('Vault-DepositsPausedTitle')
        : null;
    return state === null ? '' : <PoolPaused message={t(state)} />;
  };

  return (
    <Grid container alignItems="center" spacing={1} style={{ padding: '16px' }}>
      <div className={classes.dataContainer}>
        {vaultStateTitle(pool.status, pool.depositsPaused)}
        <PoolTitle
          name={pool.name}
          logo={pool.logo}
          description={pool.tokenDescription}
          url={pool.tokenDescriptionUrl}
        />

        <PoolCardHeaderActions helpUrl={pool.tokenDescriptionUrl} />
      </div>
    </Grid>
  );
};

export default PoolCardHeader;
