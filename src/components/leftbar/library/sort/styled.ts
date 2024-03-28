import { Button, styled } from '@mui/material';

export const StyledSortButton = styled(Button)(({ theme }) => ({
  padding: '0',
  fontSize: '0.8rem',
  minWidth: 'max-content',

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
  },

  '& .MuiButton-endIcon': {
    marginLeft: '6px',
  },
}));
