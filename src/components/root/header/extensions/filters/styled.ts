import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active = false }) => ({
  borderRadius: '16px',
  color: theme.palette.common.white,
  height: '32px',
  padding: '0 14px',
  minWidth: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',

  ...(!active && {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.09)',
    },
  }),

  ...(active && {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,

    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  }),
}));

StyledButton.defaultProps = {
  disableRipple: true,
};
