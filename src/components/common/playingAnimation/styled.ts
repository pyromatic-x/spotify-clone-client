import { styled } from '@mui/material';

export const AnimationLine = styled('div', {
  shouldForwardProp: (prop) => prop !== 'animation',
})<{ animation: 'first' | 'second' | 'third' | 'fourth' }>(({ theme, animation = 'first' }) => ({
  width: '100%',
  backgroundColor: theme.palette.green.main,
  animationName: animation,
  animationDuration: '0.65s',
  animationTimingFunction: 'ease-out',
  animationIterationCount: 'infinite',

  '@keyframes first': {
    '0%': { height: '5%' },
    '33%': { height: '50%' },
    '66%': { height: '100%' },
    '100%': { height: '5%' },
  },
  '@keyframes second': {
    '0%': { height: '50%' },
    '33%': { height: '100%' },
    '66%': { height: '5%' },
    '100%': { height: '50%' },
  },
  '@keyframes third': {
    '0%': { height: '100%' },
    '33%': { height: '5%' },
    '66%': { height: '50%' },
    '100%': { height: '100%' },
  },
  '@keyframes fourth': {
    '0%': { height: '5%' },
    '33%': { height: '37%' },
    '66%': { height: '83%' },
    '100%': { height: '5%' },
  },
}));
