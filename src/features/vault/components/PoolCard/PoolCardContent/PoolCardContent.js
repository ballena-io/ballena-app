import { makeStyles } from '@material-ui/core/styles';
import { calcDaily, formatApy, formatTvl } from 'features/helpers/format';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabeledStat from '../LabeledStat/LabeledStat';
import styles from './styles';

const useStyles = makeStyles(styles);

const PoolCardContent = ({ pool, balanceSingle, sharesBalance, apy }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.statsContainer}>
      <div className={classes.statsRow}>
        <LabeledStat value={formatApy(apy)} label={t('Vault-APY')} center={true} />
        <LabeledStat value={calcDaily(apy)} label={t('Vault-APYDaily')} center />
      </div>

      <div className={classes.statsRow}>
        <LabeledStat value={formatTvl(pool.tvl, pool.oraclePrice)} label={t('Vault-TVL')} center />
      </div>
    </div>
  );
};

export default PoolCardContent;
