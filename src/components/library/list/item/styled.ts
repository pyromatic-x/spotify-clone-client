import { Box, styled } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';

export const StyledLibraryItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  display: 'grid',
  padding: '6px',
  borderRadius: '6px',

  backgroundColor: selected ? theme.palette.hover.track : 'transparent',

  '&:hover': {
    backgroundColor: selected ? theme.palette.hover.library : theme.palette.hover.track,
    cursor: 'pointer',
  },

  '& p': {
    fontSize: '0.85rem',
  },
}));

export const LibraryItemCover = styled('img', {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'fullwidth',
})<{ variant: 'rounded' | 'circle'; fullwidth?: boolean }>(({ variant, fullwidth }) => ({
  objectFit: 'cover',
  aspectRatio: 1,
  borderRadius: variant === 'rounded' ? '4px' : '50%',

  ...(fullwidth
    ? {
        width: '100%',
        height: '100%',
      }
    : {
        width: '50px',
        height: '50px',
      }),
}));

export const PinIcon = styled(PushPinIcon)(({ theme }) => ({
  transform: 'rotate(45deg)',
  width: '18px',

  fill: theme.palette.primary.main,
}));
