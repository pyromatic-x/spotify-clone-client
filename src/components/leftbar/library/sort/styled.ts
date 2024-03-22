import { Button, styled } from '@mui/material';

export const StyledSortButton = styled(Button)({
  padding: '0',
  fontSize: '0.8rem',
  minWidth: 'max-content',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#ffffff',
  },

  '& .MuiButton-endIcon': {
    marginLeft: '6px',
  },
});
