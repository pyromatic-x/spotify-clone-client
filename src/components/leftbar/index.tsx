import { useMediaQuery, useTheme } from '@mui/material';
import Library from './library';
import { useEffect } from 'react';
import { Container } from './styled';
import { useUnit } from 'effector-react';
import { $collapsed, $width, changeMenuWidth } from './effect';
import { menuConfig } from './constants';

const Leftbar = () => {
  const width = useUnit($width);
  const collapsed = useUnit($collapsed);

  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  useEffect(() => {
    if (!collapsed && collapse) changeMenuWidth(menuConfig.minWidth);
  }, [collapse, collapsed]);

  return (
    <Container resizedWidth={width} mr="8px">
      <Library />
    </Container>
  );
};

export default Leftbar;
