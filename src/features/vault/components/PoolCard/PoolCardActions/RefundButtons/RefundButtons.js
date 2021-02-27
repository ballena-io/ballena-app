import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button.js';
import { refundABI } from 'features/configure/abi';
import { useConnectWallet } from 'features/home/redux/hooks';
import { useSnackbar } from 'notistack';
import React, { memo } from 'react';

import { useFetchApproval } from '../../../../redux/hooks';
import styles from './styles';

const useStyles = makeStyles(styles);

const RefundButtons = ({ tokenAddress, refundAddress, index }) => {
  const classes = useStyles();
  const { web3, address } = useConnectWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchApproval } = useFetchApproval();

  const onRefundApproval = () => {
    fetchApproval({
      address,
      web3,
      tokenAddress,
      refundAddress,
      index,
    })
      .then(() => enqueueSnackbar(`Approval success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Approval error: ${error}`, { variant: 'error' }));
  };

  const onRefund = () => {
    const vault = new web3.eth.Contract(refundABI, refundAddress);
    vault.methods.refund().send({ from: address });
  };

  return (
    <>
      <Button
        className={`${classes.showDetailButton} ${classes.showDetailButtonContained}`}
        onClick={onRefundApproval}
      >
        Approve
      </Button>
      <Button
        className={`${classes.showDetailButton} ${classes.showDetailButtonContained}`}
        onClick={onRefund}
      >
        Refund
      </Button>
    </>
  );
};

export default memo(RefundButtons);
