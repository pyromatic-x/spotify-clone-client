import { Box, styled } from '@mui/material';

export const AboutContainer = styled(Box)(({}) => ({
  display: 'flex',
  alignItems: 'flex-end',
  position: 'relative',
  aspectRatio: '1.57',
  transition: '0.3s ease',
  padding: '30px',
  maxWidth: '900px',
  height: '570px',

  ':hover': {
    transform: 'scale(1.012)',
  },
}));
export const AboutWrapper = styled(Box)(({}) => ({
  backgroundPosition: 'center',
  aspectRatio: '1.57',
  filter: 'brightness(0.35)',
  borderRadius: '8px',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));

export const LikedSongsImageContainer = styled(Box)(({}) => ({
  width: '100px',
  height: '100px',
  position: 'relative',
}));
export const LikedSongsIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `2px solid ${theme.palette.background.main}`,

  width: '25px',
  height: '25px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,

  position: 'absolute',
  bottom: 0,
  right: 0,

  '& svg': {
    position: 'relative',
    fontSize: '0.85rem',
    right: '-1px',
  },
}));
