import { makeStyles } from '@material-ui/core/styles';
import { calcDaily, formatApy, formatTvl } from 'features/helpers/format';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LabeledStat from '../LabeledStat/LabeledStat';
import styles from './styles';

const useStyles = makeStyles(styles);

const PoolCardContent = ({ pool, apy }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.statsContainer}>
      <LabeledStat value={formatApy(apy)} label={t('Vault-APY')} />
      <LabeledStat value={calcDaily(apy)} label={t('Vault-APYDaily')} />
      <LabeledStat value={formatTvl(pool.tvl, pool.oraclePrice)} label={t('Vault-TVL')} />
    </div>
  );
};

export default PoolCardContent;
