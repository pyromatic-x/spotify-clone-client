import { Box, styled } from '@mui/material';

export const AppContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: `
    "header header header"
    "library main rightbar"
    "library main rightbar"
    "audiobar audiobar audiobar"
  `,
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr auto',
  gap: '8px',
  padding: '0 8px',
  height: '100vh',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '100%',
  },
}));
