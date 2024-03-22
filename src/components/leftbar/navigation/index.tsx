import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MainContainer from '../../common/MainContainer';
import { Item } from './styled';
import { items } from './constants';
import { useUnit } from 'effector-react';
import { $collapsed } from '../effect';

const Navigation = () => {
  const collapsed = useUnit($collapsed);

  const { pathname } = useLocation();

  return (
    <MainContainer
      sx={{
        display: 'flex',
        justifyContent: 'start',
      }}
    >
      <Grid container flexDirection="column" gap="10px" paddingLeft="10px">
        {items.map((i) => {
          const active = i.activePaths.includes(pathname);
          const Icon = active ? i.IconActive : i.Icon;

          return (
            <Item to={i.path} active={active} key={i.title}>
              <Icon />
              {!collapsed && (
                <Typography fontWeight="bold" ml="10px">
                  {i.title}
                </Typography>
              )}
            </Item>
          );
        })}
      </Grid>
    </MainContainer>
  );
};
export default Navigation;
