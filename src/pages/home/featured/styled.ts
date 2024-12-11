import { Box, styled } from '@mui/material';

export const FeaturedContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FeaturedCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  height: '80px',
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

  '& p': {
    fontSize: '1rem',
  },

  '.playbutton': {
    opacity: 0,
  },

  [theme.breakpoints.down('md')]: {
    height: '50px',

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
