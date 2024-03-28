import { Box, InputBase, styled } from '@mui/material';

export const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.hover.track,
  padding: '6px 16px',
  borderRadius: '26px',
  maxWidth: '500px',
  width: '100%',
  flexShrink: 1,
  border: '1px solid transparent',
  cursor: 'default',

  '&:hover': {
    borderColor: theme.palette.hover.popover,

    '& .MuiInputAdornment-positionStart svg': {
      fill: theme.palette.common.white,
    },
  },

  '&.Mui-focused': {
    outline: '2px solid white',
  },

  '& .MuiInputAdornment-positionStart svg': {
    fill: theme.palette.secondary.main,
  },

  '& .MuiInputAdornment-positionEnd': {
    cursor: 'pointer',
  },

  "& [aria-label='Clear search field']": {
    fill: theme.palette.secondary.main,
  },
}));

export const Divider = styled(Box)(({ theme }) => ({
  width: '1px',
  height: '30px',
  marginRight: '10px',
  backgroundColor: theme.palette.secondary.light,
}));
