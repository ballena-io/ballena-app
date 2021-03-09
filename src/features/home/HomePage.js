import Pools from 'features/vault/components/Pools/Pools';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Disclaimer from '../../components/Disclaimer/Disclaimer';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Disclaimer text={t('disclaimer-launching')} />
      <Pools fromPage="home" />
    </>
  );
}
