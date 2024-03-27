import { Box, styled } from '@mui/material';

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'resizedWidth',
})<{ resizedWidth: number }>(({ resizedWidth }) => ({
  gridArea: 'leftbar',
  width: `${resizedWidth}px`,
  height: '100%',
  display: 'flex',
}));
