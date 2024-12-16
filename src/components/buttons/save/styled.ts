import { Box, styled } from '@mui/material';

export const SaveTrackPopoverPlaylist = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px',
  borderRadius: '4px',

  '&:hover': {
    backgroundColor: theme.palette.hover.library,
  },

  '& img': {
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    objectFit: 'cover',
    aspectRatio: 1,
  },
}));

export const SaveTrackPopoverButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  bottom: '-4px',
  padding: '10px 16px',
  gap: '12px',
  width: 'calc(100% + 22px)',
  margin: '0 -11px',
  boxShadow: theme.shadows[10],
}));
