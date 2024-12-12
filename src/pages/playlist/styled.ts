import { Box, styled, Typography } from '@mui/material';
import tinycolor from 'tinycolor2';

export const HeaderBackdrop = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent?: string }>(({ theme, accent, height }) => ({
  position: 'absolute',
  left: '0',
  top: '-5px',
  display: 'flex',
  height: height as string,
  width: '100%',
  transition: '0.2s ease',

  ...(accent && {
    background: `linear-gradient(0deg, ${tinycolor(accent).darken(25)} 0%, ${accent} 100%)`,
  }),

  ':after': {
    content: "''",
    width: '100%',
    height: '220px',
    position: 'absolute',
    left: 0,
    bottom: '-220px',

    ...(accent && {
      background: `linear-gradient(180deg, ${tinycolor(accent).darken(28)} 0%, ${theme.palette.background.main} 100%)`,
    }),
  },
}));
export const Header = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  zIndex: 1,
  transition: '0.2s ease',
}));

export const HeaderCover = styled('img', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: string }>(({ theme, size }) => ({
  width: size,
  minHeight: size,
  aspectRatio: '1',
  borderRadius: '6px',
  cursor: 'pointer',
  boxShadow: theme.shadows[10],
  transition: '0.2s ease',
  marginRight: '22px',

  ':hover': {
    transform: 'scale(1.02)',
  },
}));

export const HeaderContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '100%',
  transition: '0.2s ease',
}));

export const HeaderName = styled(Typography)(({ fontSize }) => ({
  fontWeight: 'bold',
  lineHeight: '1.3',
  fontSize: typeof fontSize === 'string' ? fontSize : '6rem',
  transition: '0.2s ease',
}));

export const HeaderAuthorAvatar = styled('img')(() => ({
  width: '24px',
  height: '24px',
  aspectRatio: '1',
  objectFit: 'cover',
  borderRadius: '50%',
  marginRight: '6px',
}));
