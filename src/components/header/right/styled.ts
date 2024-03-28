import { ButtonBase, IconButton, styled } from '@mui/material';

export const ProfileIcon = styled(ButtonBase)(({ theme }) => ({
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  padding: '7px',
  backgroundColor: theme.palette.background.button,

  '&:hover': {
    backgroundColor: theme.palette.background.button,
    transform: 'scale(1.05)',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '& svg': {
    fontSize: '1.55rem',
    color: theme.palette.secondary.main,
  },
  '&:hover svg': {
    color: theme.palette.common.white,
  },
}));

StyledIconButton.defaultProps = {
  disableRipple: true,
};
