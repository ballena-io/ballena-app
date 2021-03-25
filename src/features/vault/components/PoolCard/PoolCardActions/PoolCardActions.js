import { makeStyles } from '@material-ui/core/styles';
import BigNumber from 'bignumber.js';
import BalleButton from 'components/BalleButton/BalleButton';
import BalleModal from 'components/BalleModal';
import { byDecimals } from 'features/helpers/bignumber';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { formatDecimals } from '../helpers';
import LabeledStat from '../LabeledStat/LabeledStat';
import DepositSection from './DepositSection/DepositSection';
import styles from './styles';
import WithdrawSection from './WithdrawSection/WithdrawSection';

const useStyles = makeStyles(styles);

const PoolCardActions = ({ pool, balanceSingle, index, sharesBalance }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [openDepositSection, setOpenDepositSection] = useState(false);
  const [openWithdrawSection, setOpenWithdrawSection] = useState(false);

  const handleDepositSectionOpen = () => {
    setOpenDepositSection(true);
  };

  const handleWithdrawSectionOpen = () => {
    setOpenWithdrawSection(true);
  };

  const handleClose = () => {
    setOpenDepositSection(false);
    setOpenWithdrawSection(false);
  };

  const balleEarned = formatDecimals(
    byDecimals(
      sharesBalance.multipliedBy(new BigNumber(pool.rewardPerFullShare)),
      pool.tokenDecimals
    )
  );

  const depositedValue = formatDecimals(
    byDecimals(
      sharesBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)),
      pool.tokenDecimals
    )
  );

  const depositedLPValue = `${depositedValue || '0'}LP`;
  // const depositedDolarValue = `${(depositedValue * pool.oraclePrice).toFixed(2)}$`;

  const balanceValue = formatDecimals(balanceSingle);

  const balanceLPValue = `${balanceValue || '0'}LP`;
  // const balanceDolarValue = `${(balanceValue * pool.oraclePrice).toFixed(2)}$`;

  return (
    <div className={classes.footer}>
      <div className={classes.statsActionsRow}>
        <LabeledStat value={!isNaN(balleEarned) ? balleEarned : 0} label={t('balle-earned')} />
        <div className={classes.balances}>
          <div>
            <LabeledStat
              columnDirection
              value={balanceLPValue}
              // secondValue={balanceDolarValue}
              label={t('Vault-Balance')}
            />
          </div>
          <div className={classes.alignRight}>
            <LabeledStat
              columnDirection
              value={depositedLPValue}
              // secondValue={depositedDolarValue}
              label={t('Vault-Deposited')}
            />
          </div>
        </div>
      </div>

      <div className={classes.buttonsContainer}>
        {pool.status !== 'eol' && (
          <BalleButton onClick={handleDepositSectionOpen}>{t('Vault-DepositButton')}</BalleButton>
        )}
        <BalleButton
          className={pool.status === 'eol' && classes.retiredWithdrawButton}
          isOutlined={pool.status !== 'eol'}
          onClick={handleWithdrawSectionOpen}
        >
          {t('Vault-WithdrawButton')}
        </BalleButton>
      </div>

      <BalleModal
        id={'deposit-section'}
        onclose={handleClose}
        openModal={openDepositSection}
        title={pool.token}
      >
        <DepositSection index={index} pool={pool} balanceSingle={balanceSingle} />
      </BalleModal>

      <BalleModal
        id={'withdraw-section'}
        onclose={handleClose}
        openModal={openWithdrawSection}
        title={pool.token}
      >
        <WithdrawSection index={index} pool={pool} sharesBalance={sharesBalance} />
      </BalleModal>
    </div>
  );
};

export default PoolCardActions;
