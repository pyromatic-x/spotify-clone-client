import { Box, styled } from '@mui/material';

export const LibraryListConrainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'scroll',
  height: '100%',
}));

export const StyledLibraryList = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 8px',
  height: '100%',
}));
