import { ButtonBase, styled } from '@mui/material';

export const StyledSortAndViewButton = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    transform: 'scale(1.02)',
  },
}));
