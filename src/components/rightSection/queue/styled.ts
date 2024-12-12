import { Box, styled, Tabs } from '@mui/material';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  width: '100%',
  position: 'sticky',
  top: 0,
  left: 0,
}));

export const StyledTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
  padding: '8px',
  borderRadius: '6px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.hover.main,

    '& .simple-playbutton': {
      opacity: 1,
    },

    '& img': {
      filter: 'brightness(0.3)',
    },
  },

  '& img': {
    height: '100%',
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: '4px',
  },

  '& .simple-playbutton': {
    position: 'absolute',
    opacity: 0,
    top: '12px',
    left: '12px',
    zIndex: 1,
  },
}));
