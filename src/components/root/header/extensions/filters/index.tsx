import { Grid } from '@mui/material';
import { StyledButton } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { filters } from './constants';

const Filters = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Grid container gap={1}>
      {filters.map((t) => (
        <StyledButton active={location.pathname === t.path} onClick={() => navigate(t.path)} key={t.title}>
          {t.title}
        </StyledButton>
      ))}
    </Grid>
  );
};

export default Filters;
