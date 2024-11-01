import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '8px 12px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: theme.palette.hover.track,

    '& .track-liked-button, & .track-more-button': {
      opacity: 1,
    },
  },

  '& .track-liked-button, & .track-more-button': {
    opacity: 0,
  },
}));
