import { Box, styled } from '@mui/material';

export const LibraryContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'resizedWidth',
})<{ resizedWidth: number }>(({ resizedWidth, theme }) => ({
  gridArea: 'library',
  width: `${resizedWidth}px`,
  height: '100%',
  display: 'flex',
  borderRadius: '8px',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.main,
}));
