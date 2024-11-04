import { Box, styled } from '@mui/material';

export const RootContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: `
    "header header header"
    "leftbar main rightbar"
    "leftbar main rightbar"
    "audiobar audiobar audiobar"
  `,
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr auto',
  padding: '0 8px',
  height: '100vh',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '100%',
  },
}));
