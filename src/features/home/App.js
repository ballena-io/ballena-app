import { makeStyles, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import Alert from 'components/Alert';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import { Notifier } from 'features/common';
import { SnackbarProvider } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Footer from '../../components/Footer/Footer';
import { createWeb3Modal } from '../web3';
import useNightMode from './hooks/useNightMode';
import appStyle from './jss/appStyle.js';
import createTheme from './jss/appTheme';
import { useConnectWallet, useDisconnectWallet } from './redux/hooks';

const useStyles = makeStyles(appStyle);

export default function App({ children }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    connectWallet,
    web3,
    address,
    networkId,
    connected,
    connectWalletPending,
  } = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState(null);
  const [networkAlert, setNetworkAlert] = useState(false);

  const { isNightMode, setNightMode } = useNightMode();
  const theme = createTheme(isNightMode);

  useEffect(() => {
    setModal(createWeb3Modal(t));
  }, [setModal, t]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [web3Modal, connectWallet]);

  useEffect(() => {
    if (
      web3 &&
      address &&
      !connectWalletPending &&
      networkId &&
      Boolean(networkId !== Number(process.env.REACT_APP_NETWORK_ID))
    ) {
      setNetworkAlert(true);
    }
  }, [web3, address, networkId, connectWalletPending, t]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <div
            className={classes.page}
            style={{ backgroundColor: theme.palette.background.default }}
          >
            <Header
              links={
                <HeaderLinks
                  address={address}
                  connected={connected}
                  connectWallet={() => connectWallet(web3Modal)}
                  disconnectWallet={() => disconnectWallet(web3, web3Modal)}
                  isNightMode={isNightMode}
                  setNightMode={() => setNightMode(!isNightMode)}
                />
              }
              isNightMode={isNightMode}
              setNightMode={() => setNightMode(!isNightMode)}
            />

            {networkAlert && (
              <Alert
                title={t('Network-Error')}
                description={t('network-error-message')}
                link={'https://docs.ballena.io/tutoriales/pc/configurar-wallet-metamask-pc'}
              />
            )}

            <div className={classes.container}>
              <div className={classes.children}>
                {Boolean(networkId === Number(process.env.REACT_APP_NETWORK_ID)) && children}
                <Notifier />
              </div>
            </div>

            <Footer />
            {/* <Pastures /> */}
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}
