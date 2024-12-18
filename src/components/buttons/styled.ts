import { Box, ButtonBase, styled } from '@mui/material';

export const StyledPlayButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size?: number }>(({ theme, size }) => ({
  borderRadius: '50%',
  height: size ? `${size}px` : '48px',
  width: size ? `${size}px` : '48px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,

  '& svg': {
    fontSize: size ? size / 2 + 'px' : '1.7rem',
  },

  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#3BE377',
  },
}));

export const StyledSimplePlayButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size?: number }>(({ theme, size }) => ({
  borderRadius: '50%',
  backgroundColor: 'transparent',
  color: theme.palette.common.white,

  '& svg': {
    fontSize: size ? size / 2 + 'px' : '1.8rem',
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const PlayButtonWrapper = styled(Box)(() => ({
  position: 'absolute',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
}));
