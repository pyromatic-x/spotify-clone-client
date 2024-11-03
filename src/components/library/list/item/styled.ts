import { Box, styled } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';

export const StyledLibraryItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'grid',
  gridTemplateColumns: '61% 19% 20%',
  padding: '6px',
  borderRadius: '6px',

  backgroundColor: selected ? theme.palette.library.list.selected : 'transparent',

  '&:hover': {
    backgroundColor: selected ? theme.palette.library.list.hoverOnSelected : theme.palette.library.list.hover,
    cursor: 'pointer',
  },
}));

export const LibraryItemCover = styled('img', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant: 'rounded' | 'circle' }>(({ variant }) => ({
  width: '50px',
  height: '50px',

  borderRadius: variant === 'rounded' ? '4px' : '50%',
}));

export const PinIcon = styled(PushPinIcon)(({ theme }) => ({
  transform: 'rotate(45deg)',
  width: '18px',

  fill: theme.palette.green,
}));
