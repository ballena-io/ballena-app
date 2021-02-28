import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import BigNumber from 'bignumber.js';
import { byDecimals } from 'features/helpers/bignumber';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { shouldHideFromHarvest } from '../../../../helpers/utils';
import { formatDecimals } from '../helpers';
import LabeledStat from '../LabeledStat/LabeledStat';
import DepositSection from './DepositSection/DepositSection';
import HarvestSection from './HarvestSection/HarvestSection';
import styles from './styles';
import WithdrawSection from './WithdrawSection/WithdrawSection';

const useStyles = makeStyles(styles);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
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

  return (
    <div className={classes.footer}>
      <div className={classes.statsActionsRow}>
        <div>
          <Button
            className={`${classes.showDetailButton} ${classes.showDetailButtonContained}`}
            onClick={handleDepositSectionOpen}
          >
            {t('Vault-DepositButton')}
          </Button>
        </div>
        <div>
          <LabeledStat value={formatDecimals(balanceSingle)} label={t('Vault-Balance')} />
          <LabeledStat
            value={formatDecimals(
              byDecimals(
                sharesBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)),
                pool.tokenDecimals
              )
            )}
            label={t('Vault-Deposited')}
            align="start"
          />
        </div>
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          className={`${classes.showDetailButton} ${classes.showDetailButtonOutlined}`}
          onClick={handleWithdrawSectionOpen}
        >
          {t('Vault-WithdrawButton')}
        </Button>

        {shouldHideFromHarvest(pool.id) ? '' : <HarvestSection index={index} pool={pool} />}
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
