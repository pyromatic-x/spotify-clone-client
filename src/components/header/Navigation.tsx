import { Grid } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material/';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationButton } from './styled';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
  );
}

export default Navigation;
