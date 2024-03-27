import { Grid } from '@mui/material';
import { HomeIconButton, NavigationButton } from './styled';
import { ArrowBackIosNew, ArrowForwardIos, Home, HomeOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderLeftPart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname.includes('home') || location.pathname === '/';

  return (
    <Grid container alignItems="center" flexWrap="nowrap" width="auto">
      <Grid
        container
        columnGap={0.5}
        flexWrap="nowrap"
        width="max-content"
        alignItems="center"
        gridArea="navigation"
        mr={2}
      >
        <NavigationButton onClick={() => navigate(-1)} disabled={location.key === 'default'}>
          <ArrowBackIosNew />
        </NavigationButton>
        <NavigationButton onClick={() => navigate(1)}>
          <ArrowForwardIos />
        </NavigationButton>
      </Grid>
      <HomeIconButton onClick={() => navigate('/')}>
        {isHome ? <Home /> : <HomeOutlined color="secondary" />}
      </HomeIconButton>
    </Grid>
  );
};

export default HeaderLeftPart;
