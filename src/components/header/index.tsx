import { Grid } from '@mui/material';
import HeaderNavigation from './Navigation';
import { memo } from 'react';
import HeaderMeta from './Meta';
import HeaderSearch from './search';

const Header = () => {
  return (
    <Grid
      container
      component="header"
      alignItems="center"
      justifyContent="space-between"
      gridArea="header"
      height="60px"
      padding="0 8px"
      wrap="nowrap"
    >
      <HeaderNavigation />
      <HeaderSearch />
      <HeaderMeta />
    </Grid>
  );
};

export default memo(Header);
