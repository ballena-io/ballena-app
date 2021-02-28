import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BigNumber from 'bignumber.js';
import { byDecimals } from 'features/helpers/bignumber';
import { calcDaily, formatApy, formatTvl } from 'features/helpers/format';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabeledStat from './LabeledStat/LabeledStat';
import PoolPaused from './PoolPaused/PoolPaused';
import PoolTitle from './PoolTitle/PoolTitle';
import styles from './styles';

// import SummaryActions from './SummaryActions/SummaryActions';

const useStyles = makeStyles(styles);

const PoolCardHeader = ({ pool, toggleCard, isOpen, balanceSingle, sharesBalance, apy }) => {
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
    <Grid
      container
      className={
        pool.status === 'eol'
          ? classes.detailsRetired
          : pool.depositsPaused
          ? classes.detailsPaused
          : classes.details
      }
      alignItems="center"
      spacing={1}
      style={{ padding: '16px' }}
    >
      {vaultStateTitle(pool.status, pool.depositsPaused)}
      <PoolTitle
        name={pool.name}
        logo={pool.logo}
        description={pool.tokenDescription}
        url={pool.tokenDescriptionUrl}
      />

      {/* <SummaryActions helpUrl={pool.tokenDescriptionUrl} /> */}

      <div className={classes.statsContainer}>
        <div className={classes.statsRow}>
          <LabeledStat value={formatApy(apy)} label={t('Vault-APY')} xs={4} align="start" />
          <LabeledStat value={calcDaily(apy)} label={t('Vault-APYDaily')} xs={4} />
          <LabeledStat
            value={formatTvl(pool.tvl, pool.oraclePrice)}
            label={t('Vault-TVL')}
            xs={4}
          />
        </div>

        <div className={classes.statsRow}>
          <LabeledStat value={formatDecimals(balanceSingle)} label={t('Vault-Balance')} xs={6} />
          <LabeledStat
            value={formatDecimals(
              byDecimals(
                sharesBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)),
                pool.tokenDecimals
              )
            )}
            label={t('Vault-Deposited')}
            xs={6}
            align="start"
          />
        </div>
      </div>
    </Grid>
  );
};

const formatDecimals = number => {
  return number >= 10 ? number.toFixed(4) : number.isEqualTo(0) ? 0 : number.toFixed(8);
};

export default PoolCardHeader;
