import { Box, styled, Typography } from '@mui/material';
import Logo from '../../../../assets/icons/Logo';

export const StyledLines = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',

  '&::before': {
    content: "''",
    position: 'absolute',
    left: '0',
    bottom: '16px',
    width: '5px',
    height: '20px',
    backgroundColor: color,
  },

  '&::after': {
    content: "''",
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '6px',
    backgroundColor: color,
  },
}));

export const LinesContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'loaded',
})<{ loaded: boolean }>(({ loaded }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  opacity: loaded ? '1' : '0',
  transition: '0.35s ease-out',
}));

export const StyledLogo = styled(Logo)(() => ({
  display: 'block',
  position: 'absolute',
  top: '6px',
  left: '6px',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: '14px',
  left: '14px',
  fontSize: '50%',
  fontWeight: '700',
  color: theme.palette.common.white,
}));
