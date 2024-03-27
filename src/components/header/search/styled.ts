import { Box, InputBase, styled } from '@mui/material';

export const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: '#2a2a2a',
  padding: '6px 16px',
  borderRadius: '26px',
  maxWidth: '500px',
  width: '100%',
  flexShrink: 1,
  border: '1px solid transparent',
  cursor: 'default',

  '&:hover': {
    borderColor: '#3C3C3C',

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

export const Divider = styled(Box)(() => ({
  width: '1px',
  height: '30px',
  marginRight: '10px',
  backgroundColor: '#636363',
}));
