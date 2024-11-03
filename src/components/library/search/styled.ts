import { FormControl, IconButton, TextField, styled } from '@mui/material';

export const LibrarySearchContainer = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== 'moveToLeft',
})<{
  moveToLeft?: boolean;
}>(({ moveToLeft = false }) => ({
  position: 'relative',

  transform: 'translateX(0px)',
  transition: 'transform 0.3s ease',

  ...(moveToLeft && {
    transform: 'translateX(-160px)',
  }),
}));

export const StyledSearchInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'show',
})<{
  show: boolean;
}>(({ theme, show = false }) => ({
  backgroundColor: theme.palette.background.popover,
  border: 'none',
  borderRadius: '6px',
  maxWidth: '190px',
  position: 'absolute',
  left: 0,
  transition: 'all 0.3s ease',

  ...(show
    ? {
        width: '190px',
        opacity: 1,
        pointerEvents: 'all',
      }
    : {
        width: '0px',
        opacity: 0,
        pointerEvents: 'none',
      }),

  '& .MuiInputBase-root': {
    height: '32px',
    borderRadius: '6px',
    padding: '0 5px',
  },

  '& svg': {
    fontSize: '1.3rem',
  },

  '& .MuiInputBase-input': {
    fontSize: '0.8rem',
  },

  '& .MuiInputAdornment-positionEnd svg': {
    cursor: 'pointer',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

export const StyledSearchButton = styled(IconButton)(() => ({
  padding: '0',
  minWidth: 'auto',
  width: '31px',
  height: '32px',
  opacity: '1',
  pointerEvents: 'all',
  transition: '0.2s ease',

  '& svg': {
    fontSize: '1.3rem',
  },
}));
