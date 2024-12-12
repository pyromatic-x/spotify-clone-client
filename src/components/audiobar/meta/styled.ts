import { IconButton, styled } from '@mui/material';

export const StyledButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  '& svg': {
    fontSize: '1.2rem',
  },

  ...(active && {
    color: theme.palette.primary.main + ' !important',

    ':after': {
      content: "''",
      position: 'absolute',
      bottom: '-1px',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

StyledButton.defaultProps = {
  variant: 'scalable',
};
