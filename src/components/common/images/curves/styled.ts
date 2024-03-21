import { SvgIcon, Typography, styled } from '@mui/material';
import { hexToRgbA } from '../../../../utils/strings';
import Logo from '../../../../assets/icons/Logo';

export const CurvesSVGContainer = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== 'accent' && prop !== 'loaded',
})<{ accent: string; loaded: boolean }>(({ accent, loaded }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  opacity: loaded ? '0.8' : '0',
  transition: '0.35s ease-out',

  '& path': {
    fill: hexToRgbA(accent, 0.85),
  },
}));

export const StyledLogo = styled(Logo, {
  shouldForwardProp: (prop) => prop !== 'isColorBright',
})<{ isColorBright: boolean }>(({ isColorBright }) => ({
  display: 'block',
  position: 'absolute',
  top: '2px',
  left: '2px',
  '& path': { fill: isColorBright ? 'black' : '' },
}));

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isColorBright',
})<{ isColorBright: boolean }>(({ theme, isColorBright }) => ({
  position: 'absolute',
  bottom: '4%',
  left: '6%',
  fontSize: '50%',
  fontWeight: '700',
  color: isColorBright ? theme.palette.common.black : '',
}));
