import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '60% 1fr 1fr',
  borderBottom: `1px solid ${theme.palette.grey[900]}`,
  paddingBottom: '3px',

  '& > p': {
    fontWeight: '600',
    fontSize: '12px',
    color: theme.palette.secondary.main,
  },
}));
