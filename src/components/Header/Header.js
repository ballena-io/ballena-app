import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Close from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
import NightsStay from '@material-ui/icons/NightsStay';
import WbSunny from '@material-ui/icons/WbSunny';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <Hidden xsDown>
            <div className={classes.logoContainer}>
              <img
                alt="BALLE"
                src={require(`images/logos/logo_balle_web.png`)}
                height={'60px'}
                className={classes.logo}
              />
              <div>
                <a href="https://ballena.io">ballena.io</a>
              </div>
            </div>
          </Hidden>
          <Hidden smUp>
            <img
              alt="BIFI"
              src={require(`images/logos/logo_balle_web.png`)}
              height={'45px'}
              className={classes.logo}
            />
          </Hidden>
        </Button>

        <span>
          {renderLink('barn', 'barn', 'warehouse', classes)}
          <Hidden xsDown>
            {renderLink('vote', 'vote', 'vote-yea', classes)}
            {renderLink('gov', 'gov', 'landmark', classes)}
            {renderLink('dashboard', t('stats'), 'chart-bar', classes)}
            {renderLink('docs', 'docs', 'book', classes)}
          </Hidden>
          {renderLink('buy', t('buy'), 'dollar-sign', classes)}
        </span>

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            {renderLinkSidebar('gov', 'gov', 'landmark', classes)}
            {renderLinkSidebar('barn', 'barn', 'warehouse', classes)}
            {renderLinkSidebar('vote', 'vote', 'vote-yea', classes)}
            {renderLinkSidebar('dashboard', t('stats'), 'chart-bar', classes)}
            {renderLinkSidebar('docs', 'docs', 'book', classes)}
            {renderLinkSidebar('buy', t('buy'), 'dollar-sign', classes)}
            <IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const renderLinkSidebar = (name, label, icon, classes) => {
  return (
    <div style={{ width: '100%', paddingTop: '10px' }}>
      {renderLink(name, label, icon, classes)}
    </div>
  );
};

const getLinkUrl = name => {
  return name === 'buy'
    ? 'https://classic.openocean.finance/exchange/BNB'
    : `https://${name}.ballena.io`;
};

export default Header;
