import { Box, IconButton, styled } from '@mui/material';
import { $headerTransition } from './effect';
import { hexToRgbA } from '../../../utils/strings';

export const StyledHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'opacity',
})<{ bgColor: string; opacity: number }>(({ theme, bgColor, opacity }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  flexWrap: 'nowrap',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  padding: '4px 22px',
  height: '64px',
  background: hexToRgbA(bgColor, opacity),
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  transition: $headerTransition.getState() ? 'background 0.3s ease-in-out' : '',
  zIndex: theme.zIndex.appBar,
}));

export const NavigationButton = styled(IconButton)(() => ({
  backgroundColor: 'rgba(0,0,0,0.5)',
  width: '30px',
  height: '30px',
  '& svg': {
    fontSize: '1.1rem',
  },
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

NavigationButton.defaultProps = {
  disableRipple: true,
};
