import { Button, IconButton, styled } from '@mui/material';
import { LoopVariants } from '../../types';

export const ControlButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  position: 'relative',
  width: '28px',
  height: '28px',
  padding: '0px',
  transition: '0.2s ease',
  '& svg': {
    fontSize: '22px',
    fill: active ? theme.palette.primary.main : theme.palette.secondary,
    opacity: active ? 0.85 : 1,
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '& svg': {
      fill: active ? theme.palette.primary.main : theme.palette.common.white,
      opacity: 1,
    },
  },

  ...(active && {
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 'calc(50% - 2px)',
      bottom: '-3px',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

export const LoopButton = styled(ControlButton, {
  shouldForwardProp: (prop) => prop !== 'state',
})<{ state?: keyof typeof LoopVariants }>(({ theme, state }) => ({
  ...(state === 'TRACK' && {
    '&::after': {
      content: "'1'",
      position: 'absolute',
      left: 'calc(50% - 2px)',
      top: '10px',
      fontSize: '7px',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  }),
}));

export const PlayPauseButton = styled(Button)({
  borderRadius: '50%',
  backgroundColor: 'white',
  minWidth: '28px',
  minHeight: '28px',
  padding: '0px',
  color: 'black',
  transition: '0.2s ease',
  '&:hover': {
    backgroundColor: 'white',
  },
  '&.paused:hover': {
    transform: 'scale(1.07)',
  },
});

ControlButton.defaultProps = {
  disableRipple: true,
};
PlayPauseButton.defaultProps = {
  disableRipple: true,
};
