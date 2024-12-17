import { Box, styled, Typography } from '@mui/material';
import tinycolor from 'tinycolor2';

export const MetaBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent?: string }>(({ theme, accent, height }) => ({
  position: 'absolute',
  left: '0',
  top: '-5px',
  display: 'flex',
  height: height as string,
  width: '100%',
  // transition: '0.2s ease',

  ...(accent && {
    background: `linear-gradient(0deg, ${tinycolor(accent)} 0%, ${accent} 100%)`,
    opacity: 0.85,
  }),

  ':after': {
    content: "''",
    width: '100%',
    height: '220px',
    position: 'absolute',
    left: 0,
    bottom: '-220px',

    ...(accent && {
      opacity: '0.6',
      background: `linear-gradient(180deg, ${tinycolor(accent).darken(5)} 0%,  ${theme.palette.background.main} 100%)`,
    }),
  },
}));

export const Meta = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'flex-end',
  zIndex: 1,
  // transition: '0.2s ease',
}));

export const MetaCover = styled('img', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: string }>(({ theme, size }) => ({
  width: size,
  minHeight: size,
  maxHeight: size,
  aspectRatio: '1',
  borderRadius: '6px',
  cursor: 'pointer',
  boxShadow: theme.shadows[10],
  // transition: '0.2s ease',
  marginRight: '22px',

  ':hover': {
    transform: 'scale(1.02)',
  },
}));

export const MetaContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '100%',
  // transition: '0.2s ease',
}));

export const MetaName = styled(Typography)(() => ({
  fontWeight: 'bold',
  lineHeight: '1.3',
  // transition: '0.2s ease',
}));

export const MetaAuthorAvatar = styled('img')(() => ({
  width: '24px',
  height: '24px',
  aspectRatio: '1',
  objectFit: 'cover',
  borderRadius: '50%',
  marginRight: '6px',
}));

export const MetaBackdropContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent?: string }>(({ theme, accent }) => ({
  position: 'absolute',
  left: '0',
  top: '0',
  display: 'flex',
  height: '560px',
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  // filter: 'brightness(0.65)',
  opacity: '0.65',

  ':after': {
    content: "''",
    width: '100%',
    height: '220px',
    position: 'absolute',
    left: 0,
    bottom: '-220px',
    opacity: '0.5',

    ...(accent && {
      background: `linear-gradient(180deg, ${accent} 0%,  ${theme.palette.background.main} 100%)`,
    }),
  },
}));
