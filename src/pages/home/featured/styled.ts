import { Box, styled } from '@mui/material';

export const FeaturedContainer = styled(Box)(() => ({
  display: 'grid',
  gap: '12px',
}));

export const FeaturedCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  borderRadius: '4px',
  alignItems: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.09)',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',

    '.playbutton': {
      opacity: 1,
    },
  },

  '.playbutton': {
    opacity: 0,
  },

  [theme.breakpoints.down('lg')]: {
    '& p': {
      fontSize: '0.85rem',
    },
  },
}));

export const FeaturedCardCover = styled('img')(({ theme }) => ({
  height: '100%',
  aspectRatio: 1,
  objectFit: 'cover',
  marginRight: '8px',
  boxShadow: theme.shadows[15],
}));
