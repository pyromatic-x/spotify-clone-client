import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: '14px ',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
}));
