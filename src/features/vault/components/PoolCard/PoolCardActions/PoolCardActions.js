import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import BigNumber from 'bignumber.js';
import BalleButton from 'components/BalleButton/BalleButton';
import { byDecimals } from 'features/helpers/bignumber';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { formatDecimals } from '../helpers';
import LabeledStat from '../LabeledStat/LabeledStat';
import DepositSection from './DepositSection/DepositSection';
import styles from './styles';
import WithdrawSection from './WithdrawSection/WithdrawSection';

const useStyles = makeStyles(styles);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitleContainer} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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

  // const depositedLPValue = `${depositedValue ? depositedValue.toFixed(6) : '...'}LP`;
  const depositedLPValue = `${depositedValue ? depositedValue : '0'}LP`;
  const depositedDolarValue = `${(depositedValue * pool.oraclePrice).toFixed(2)}$`;

  const balanceValue = formatDecimals(balanceSingle);

  const balanceLPValue = `${balanceValue ? balanceValue : '0'}LP`;
  const balanceDolarValue = `${(balanceValue * pool.oraclePrice).toFixed(2)}$`;

  return (
    <div className={classes.footer}>
      <div className={classes.statsActionsRow}>
        <LabeledStat value={balleEarned} label={t('balle-earned')} />
        <div className={classes.balances}>
          <div>
            <LabeledStat
              columnDirection
              value={balanceLPValue}
              secondValue={balanceDolarValue}
              label={t('Vault-Balance')}
            />
          </div>
          <div className={classes.alignRight}>
            <LabeledStat
              columnDirection
              value={depositedLPValue}
              secondValue={depositedDolarValue}
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

      <Dialog onClose={handleClose} aria-labelledby="deposit-section" open={openDepositSection}>
        <DialogTitle id="deposit-section-title" onClose={handleClose}>
          {pool.token}
        </DialogTitle>

        <DepositSection index={index} pool={pool} balanceSingle={balanceSingle} />
      </Dialog>

      <Dialog onClose={handleClose} aria-labelledby="withdraw-section" open={openWithdrawSection}>
        <DialogTitle id="withdraw-section-title" onClose={handleClose}>
          {pool.token}
        </DialogTitle>
        <WithdrawSection index={index} pool={pool} sharesBalance={sharesBalance} />
      </Dialog>
    </div>
  );
};

export default PoolCardActions;
