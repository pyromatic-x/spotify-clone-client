import { styled, TextField } from '@mui/material';

export const StyledSearchInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '480px',

  '& .MuiInputBase-root': {
    borderRadius: '30px',
    backgroundColor: theme.palette.hover.main,

    '&.Mui-focused, &:hover': {
      backgroundColor: theme.palette.hover.track,

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.main,
      },
      '& .MuiInputAdornment-positionStart svg': {
        color: theme.palette.common.white,
      },
    },

    '& input': {
      height: '1rem',
    },
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px !important',
    borderColor: theme.palette.hover.main,
  },

  '& .MuiInputAdornment-root:hover': {
    cursor: 'pointer',
  },
}));
