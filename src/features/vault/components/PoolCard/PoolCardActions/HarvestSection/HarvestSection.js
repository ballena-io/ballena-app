import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BalleButton from 'components/BalleButton/BalleButton';
import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchHarvest } from 'features/vault/redux/hooks';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const useStyles = makeStyles(styles);

const HarvestSection = ({ pool, index }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { web3, address } = useConnectWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchHarvest, fetchHarvestPending } = useFetchHarvest();
  const [showHarvestModal, setShowHarvestModal] = useState(false);

  const onHarvest = () => {
    fetchHarvest({
      address,
      web3,
      contractAddress: pool.earnContractAddress,
      index,
    })
      .then(() => enqueueSnackbar(t('Vault-HarvestSuccess'), { variant: 'success' }))
      .catch(error => enqueueSnackbar(t('Vault-HarvestError', { error }), { variant: 'error' }));
    setShowHarvestModal(false);
  };

  return (
    <>
      <Dialog open={showHarvestModal} onClose={() => setShowHarvestModal(false)}>
        <DialogTitle>
          <Typography className={classes.title} variant="body2">
            {t('Vault-HarvestConfirm')}
          </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography className={classes.subtitle} variant="body2">
              {t('Vault-HarvestDescription')}
            </Typography>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <BalleButton isOutlined onClick={() => setShowHarvestModal(false)}>
            {t('Cancel')}
          </BalleButton>
          <BalleButton isOutlined onClick={() => onHarvest()}>
            {t('Confirm')}
          </BalleButton>
        </DialogActions>
      </Dialog>

      <div className={classes.showDetailBottom}>
        <div className={classes.showDetailLeft}>{/* {t('Vault-LastHarvest')}: */}</div>
        <div style={{ textAlign: 'center' }}>
          <BalleButton isOutlined onClick={() => setShowHarvestModal(true)}>
            {fetchHarvestPending[index]
              ? `${t('Vault-Harvesting')}`
              : `${t('Vault-HarvestButton')}`}
          </BalleButton>
        </div>
      </div>
    </>
  );
};

export default HarvestSection;
