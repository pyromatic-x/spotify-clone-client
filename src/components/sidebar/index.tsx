import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Library from './library';
import { useEffect } from 'react';
import Navigation from './navigation';
import { Container } from './styled';
import Resize from './resize';
import { useUnit } from 'effector-react';
import { $collapsed, $width, changeMenuWidth } from './effect';
import { menuConfig } from './constants';

const Sidebar = () => {
  const width = useUnit($width);
  const collapsed = useUnit($collapsed);

  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  useEffect(() => {
    if (!collapsed && collapse) changeMenuWidth(menuConfig.minWidth);
  }, [collapse, collapsed]);

  return (
    <Container resizedWidth={width}>
      <Grid container flexDirection="column" flexWrap="nowrap" rowGap="8px" overflow="hidden">
        <Navigation />
        <Library />
      </Grid>
      <Resize />
    </Container>
  );
};

export default Sidebar;
