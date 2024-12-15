import { Box, styled } from '@mui/material';

export const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'showPlayButton',
})<{ showPlayButton: boolean }>(({ theme, showPlayButton }) => ({
  position: 'relative',
  borderRadius: '6px',
  padding: '12px',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.palette.hover.main,
  },

  '& img': {
    width: '100%',
    objectFit: 'cover',
    aspectRatio: 1,
    boxShadow: theme.shadows[8],
  },

  '& .playbutton-container': {
    right: '8px',
    bottom: '12px',
    height: 'unset !important',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    transform: 'translateY(12px)',
    opacity: 0,
    position: 'absolute',

    ...(showPlayButton && {
      transform: 'translateY(0)',
      opacity: 1,
    }),
  },

  '&:hover .playbutton-container': {
    transform: 'translateY(0)',
    opacity: 1,
  },
}));

export const RowItemsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'count',
})<{ count: number }>(({ count }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${count || 2}, 1fr)`,
  width: 'calc(100% + 24px)',
  margin: '0 -12px',
}));
