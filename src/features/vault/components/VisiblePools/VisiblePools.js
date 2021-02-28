import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useFilteredPools from '../../hooks/useFilteredPools';
import usePoolsByAsset from '../../hooks/usePoolsByAsset';
import usePoolsByPlatform from '../../hooks/usePoolsByPlatform';
import usePoolsByVaultType from '../../hooks/usePoolsByVaultType';
import useSortedPools from '../../hooks/useSortedPools';
import Filters from '../Filters/Filters';
import PoolCard from '../PoolCard/PoolCard';
import styles from './styles';

const useStyles = makeStyles(styles);

const VisiblePools = ({ pools, tokens, apys }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { filteredPools, toggleFilter, filters } = useFilteredPools(pools, tokens);
  const { poolsByPlatform, platform, setPlatform } = usePoolsByPlatform(filteredPools);
  const { poolsByVaultType, vaultType, setVaultType } = usePoolsByVaultType(poolsByPlatform);
  const { poolsByAsset, asset, setAsset } = usePoolsByAsset(poolsByVaultType);
  const { sortedPools, order, setOrder } = useSortedPools(poolsByAsset, apys);

  return (
    <>
      <Filters
        toggleFilter={toggleFilter}
        filters={filters}
        platform={platform}
        vaultType={vaultType}
        asset={asset}
        order={order}
        setPlatform={setPlatform}
        setVaultType={setVaultType}
        setAsset={setAsset}
        setOrder={setOrder}
      />

      <div className={classes.listContainer}>
        {sortedPools.map((pool, index) => (
          <PoolCard
            pool={pool}
            index={index}
            tokens={tokens}
            apy={apys[pool.id] || 0}
            key={pool.id}
          />
        ))}
      </div>

      {!sortedPools.length && <h3 className={classes.subtitle}>{t('No-Results')}</h3>}
    </>
  );
};

export default VisiblePools;
