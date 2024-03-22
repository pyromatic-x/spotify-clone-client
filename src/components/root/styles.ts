import { Box, styled } from '@mui/material';

export const RootContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: '102px 1fr auto',
  padding: '8px 8px 0 8px',
  height: '100vh',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '100%',
  },
}));

export const StyledOutletContainer = styled(Box)({
  height: '100%',
  overflow: 'scroll',
});
