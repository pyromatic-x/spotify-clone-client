import { IconButton, styled } from '@mui/material';

export const StyledNextPrevButton = styled(IconButton)(() => ({
  '& svg': {
    fontSize: '1.8rem',
  },
}));

export const StyledToggleButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  position: 'relative',

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

StyledNextPrevButton.defaultProps = {
  variant: 'scalable',
};

StyledToggleButton.defaultProps = {
  variant: 'scalable',
};
