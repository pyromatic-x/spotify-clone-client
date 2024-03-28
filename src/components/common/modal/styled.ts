import { Box, styled } from '@mui/material';

export const Overlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen?: boolean }>(({ theme, isOpen = false }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: theme.zIndex.modal,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  transition: '0.25s ease',

  opacity: isOpen ? '1' : '0',
  transform: isOpen ? 'scale(1)' : 'scale(0.9)',
  pointerEvents: isOpen ? 'all' : 'none',
  backgroundColor: `rgba(0, 0, 0, ${isOpen ? '0.9' : '0'})`,
}));

export const StyledModal = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  width: '80%',
  height: '80%',
  backgroundColor: theme.palette.green,
  padding: '16px 34px',
  color: theme.palette.text.gray,
  overflow: 'hidden',
  outline: '10px solid rgba(255, 255, 255, 0.2)',
}));

export const Circle = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'bottom' &&
    prop !== 'top' &&
    prop !== 'right' &&
    prop !== 'left' &&
    prop !== 'size' &&
    prop !== 'filled',
})<{
  bottom?: string;
  top?: string;
  right?: string;
  left?: string;
  size: string;
  filled?: boolean;
}>(({ bottom, top, left, right, size, filled, theme }) => ({
  ...(bottom && { bottom }),
  ...(top && { top }),
  ...(left && { left }),
  ...(right && { right }),
  width: size,
  height: size,
  position: 'absolute',
  borderRadius: '50%',
  borderWidth: '10px',
  borderColor: theme.palette.grandis,
  borderStyle: 'solid',
  backgroundColor: filled ? theme.palette.grandis : '',
}));
