import { Box, Paper, styled } from '@mui/material';
import { ImageRadius } from './types';

export const ImageBase = styled('img', {
  shouldForwardProp: (prop) => prop !== 'radius',
})<{ radius: ImageRadius }>(({ radius }) => ({
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'cover',
  transition: '0.25s ease-in-out',
  aspectRatio: 1,
  opacity: '0.75',

  borderRadius: radius,
}));

export const Placeholder = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'radius' && prop !== 'loaded',
})<{ color: string; radius: ImageRadius; loaded: boolean }>(({ color, radius, loaded }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1,
  top: '0',
  transition: '0.35s ease-out',
  opacity: loaded ? '0' : '1',
  borderRadius: radius,
  backgroundColor: color,
  filter: 'brightness(0.5)',
}));

export const Wrapper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'radius',
})<{ radius: ImageRadius }>(({ radius }) => ({
  position: 'relative',
  borderRadius: radius,
  fontSize: '1.8rem',
  overflow: 'hidden',
}));

Wrapper.defaultProps = {
  elevation: 8,
};
