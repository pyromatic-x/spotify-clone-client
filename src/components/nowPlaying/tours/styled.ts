import { Box, styled } from '@mui/material';

export const DateIconContainer = styled(Box)(({ theme }) => ({
  borderRadius: '4px',
  width: '56px',
  backgroundColor: theme.palette.hover.button,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1',
  flexShrink: 0,
}));
