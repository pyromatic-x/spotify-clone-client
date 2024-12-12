import { Box, styled } from '@mui/material';

export const Cover = styled('img')(({ theme }) => ({
  width: '100%',
  aspectRatio: 1,
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: theme.shadows[6],
  backgroundColor: theme.palette.background.main,
  cursor: 'pointer',
  marginBottom: '12px',
}));

export const Card = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: theme.palette.hover.main,

  '& p, & > a': {
    fontSize: '0.95rem',
  },
}));

export const CardImage = styled('img')(() => ({
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  width: '100%',
  maxHeight: '250px',
  minHeight: '250px',
  objectFit: 'cover',
}));
export const CardContent = styled(Box)(() => ({
  padding: '12px',
}));
