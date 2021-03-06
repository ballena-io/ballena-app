import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import BigNumber from 'bignumber.js';
import Button from 'components/CustomButtons/Button.js';
import CustomOutlinedInput from 'components/CustomOutlinedInput/CustomOutlinedInput';
import CustomSlider from 'components/CustomSlider/CustomSlider';
import { byDecimals, calculateReallyNum } from 'features/helpers/bignumber';
import { inputFinalVal, inputLimitPass } from 'features/helpers/utils';
import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchWithdraw } from 'features/vault/redux/hooks';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import RefundButtons from '../RefundButtons/RefundButtons';
import styles from './styles';

const useStyles = makeStyles(styles);

const WithdrawSection = ({ pool, index, sharesBalance }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { web3, address } = useConnectWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchWithdraw, fetchWithdrawBnb, fetchWithdrawPending } = useFetchWithdraw();
  const [withdrawAmount, setWithdrawAmount] = useState({ amount: 0, slider: 0 });

  const onSliderChange = (_, sliderNum) => {
    const total = sharesBalance
      .multipliedBy(new BigNumber(pool.pricePerFullShare))
      .dividedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals));

    setWithdrawAmount({
      amount: sliderNum === 0 ? 0 : calculateReallyNum(total, sliderNum),
      slider: sliderNum,
    });
  };

  const onInputChange = event => {
    const value = event.target.value;
    const total = sharesBalance
      .multipliedBy(new BigNumber(pool.pricePerFullShare))
      .dividedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals));

    if (!inputLimitPass(value, pool.tokenDecimals)) {
      return;
    }

    let inputVal = 0;
    let sliderNum = 0;
    if (value) {
      inputVal = Number(value.replace(',', ''));
      sliderNum = Math.round(byDecimals(inputVal / total, 0).toNumber() * 100);
    }

    setWithdrawAmount({
      amount: inputFinalVal(value, total, pool.tokenDecimals),
      slider: sliderNum,
    });
  };

  const onWithdraw = isAll => {
    if (isAll) {
      setWithdrawAmount({
        amount: sharesBalance.multipliedBy(pool.pricePerFullShare).dividedBy('1e18').toFormat(4),
        slider: 100,
      });
    }

    if (withdrawAmount.slider >= 99) {
      isAll = true;
    }

    const amountValue = withdrawAmount.amount
      ? withdrawAmount.amount.replace(',', '')
      : withdrawAmount.amount;

    if (pool.tokenAddress) {
      fetchWithdraw({
        address,
        web3,
        isAll,
        amount: new BigNumber(amountValue)
          .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
          .dividedBy(pool.pricePerFullShare)
          .toFixed(0),
        contractAddress: pool.earnContractAddress,
        index,
      })
        .then(() => enqueueSnackbar(t('Vault-WithdrawSuccess'), { variant: 'success' }))
        .catch(error => enqueueSnackbar(t('Vault-WithdrawError', { error }), { variant: 'error' }));
    } else {
      fetchWithdrawBnb({
        address,
        web3,
        isAll,
        amount: new BigNumber(amountValue)
          .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
          .toString(10),
        contractAddress: pool.earnContractAddress,
        index,
      })
        .then(() => enqueueSnackbar(t('Vault-WithdrawSuccess'), { variant: 'success' }))
        .catch(error => enqueueSnackbar(t('Vault-WithdrawError', { error }), { variant: 'error' }));
    }
  };

  const isRetiredStatus = pool.status === 'eol';

  return (
    <div className={classes.sliderDetailContainer}>
      {!isRetiredStatus && (
        <>
          <div className={classes.showDetailLeft}>
            {t('Vault-Deposited')}:{' '}
            {byDecimals(
              sharesBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)),
              pool.tokenDecimals
            ).toFormat(4)}{' '}
            {pool.token}
          </div>
          <FormControl fullWidth variant="outlined">
            <CustomOutlinedInput value={withdrawAmount.amount} onChange={onInputChange} />
          </FormControl>
          <CustomSlider
            aria-labelledby="continuous-slider"
            value={withdrawAmount.slider}
            onChange={onSliderChange}
          />
        </>
      )}
      <div className={classes.showDetailButtonCon}>
        {pool.status === 'refund' ? (
          <RefundButtons
            tokenAddress={pool.earnedTokenAddress}
            refundAddress={pool.refundContractAddress}
            index={index}
          />
        ) : (
          <>
            {!isRetiredStatus && (
              <Button
                className={`${classes.showDetailButton} ${classes.showDetailButtonOutlined}`}
                type="button"
                color="primary"
                onClick={() => onWithdraw(false)}
              >
                {fetchWithdrawPending[index]
                  ? `${t('Vault-Withdrawing')}`
                  : `${t('Vault-WithdrawButton')}`}
              </Button>
            )}
            <Button
              className={`${classes.showDetailButton} ${classes.showDetailButtonOutlined}`}
              type="button"
              color="primary"
              onClick={() => onWithdraw(true)}
            >
              {fetchWithdrawPending[index]
                ? `${t('Vault-Withdrawing')}`
                : `${t('Vault-WithdrawButtonAll')}`}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default WithdrawSection;
