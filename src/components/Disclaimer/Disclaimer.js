import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const useStyles = makeStyles(styles);

const Disclaimer = ({ isConstructionMode }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const text = isConstructionMode ? t('disclaimer-construction') : t('Disclaimer');
  const disclaimerStyles = isConstructionMode ? classes.constructionMode : classes.disclaimer;

  return (
    <Grid container item className={classes.container} justify="center">
      <Typography className={[classes.textContainer, disclaimerStyles]}>{text}</Typography>
    </Grid>
  );
};

export default memo(Disclaimer);
