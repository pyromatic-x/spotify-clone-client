import { Box, styled } from '@mui/material';

export const HomeOverlayContainer = styled(Box)(() => ({
  width: '100%',
  height: '250px',
  position: 'absolute',
  top: '0',
  left: '0',
}));
export const HomeOverlayShadow = styled(Box)(() => ({
  width: '100%',
  height: '250px',
  position: 'absolute',
  bottom: '0',
  left: '0',
  background: 'linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(0,0,0,0) 100%)',
}));
export const HomeOverlayColor = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'overlayColor',
})<{ overlayColor: string }>(({ overlayColor }) => ({
  width: '100%',
  height: '250px',
  backgroundColor: overlayColor,
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'all 1s ease',
}));
