import Pools from 'features/vault/components/Pools/Pools';
import React from 'react';

import Disclaimer from '../../components/Disclaimer/Disclaimer';

export default function HomePage() {
  return (
    <>
      <Disclaimer isConstructionMode />
      <Pools fromPage="home" />
    </>
  );
}
