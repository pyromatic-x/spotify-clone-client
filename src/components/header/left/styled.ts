import { IconButton, styled } from '@mui/material';

export const NavigationButton = styled(IconButton)(({ theme }) => ({
  '& svg': {
    fontSize: '1.55rem',
    color: theme.palette.secondary.main,
  },
  '&:hover svg': {
    color: theme.palette.common.white,
  },
}));

NavigationButton.defaultProps = {
  disableRipple: true,
};

export const HomeIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  padding: '7px',
  backgroundColor: theme.palette.background.button,

  '&:hover': {
    backgroundColor: theme.palette.background.button,
    transform: 'scale(1.05)',
  },

  '&:hover svg': {
    fill: theme.palette.common.white,
  },

  '& svg': {
    fontSize: '2rem',
  },
}));

HomeIconButton.defaultProps = {
  disableRipple: true,
};
