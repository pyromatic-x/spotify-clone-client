import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: '0px',
  color: theme.palette.secondary.main,

  '& svg': {
    fontSize: '1.3rem',
  },

  '&:hover': {
    color: active ? theme.palette.primary.main : theme.palette.common.white,
  },

  ...(active && {
    color: theme.palette.primary.main,

    '&::after': {
      content: "''",
      position: 'absolute',
      left: 'calc(50% - 2px)',
      bottom: '-1px',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));
