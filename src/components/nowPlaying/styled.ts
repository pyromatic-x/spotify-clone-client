import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.popover,
  padding: '14px ',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
}));
