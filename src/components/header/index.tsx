import { Grid } from '@mui/material';
import HeaderLeftPart from './left';
import HeaderRightPart from './right';
import Search from './search';

const Header = () => {
  return (
    <Grid
      component="header"
      gridArea="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="nowrap"
      py={1}
    >
      <HeaderLeftPart />
      <Search />
      <HeaderRightPart />
    </Grid>
  );
};

export default Header;
