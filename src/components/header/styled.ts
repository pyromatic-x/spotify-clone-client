import { IconButton, styled } from '@mui/material';
import { hexToRgbA } from '../../utils/strings';
import { $headerTransition, DEFAULT_HEADER_HEIGHT } from './effect';

export const StyledHeader = styled('header', {
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'opacity',
})<{ bgColor: string; opacity: number }>(({ theme, bgColor, opacity }) => ({
  display: 'grid',
  gridTemplateColumns: 'max-content auto auto',
  gridTemplateRows: 'auto 1fr',
  gridTemplateAreas: `
    "navigation extension-built-in menu"
    "extension-outer . ."
  `,
  alignItems: 'center',
  flexWrap: 'nowrap',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  padding: '14px 16px',
  background: hexToRgbA(bgColor, opacity),
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  transition: $headerTransition.getState() ? 'background 0.3s ease-in-out' : '',
  zIndex: theme.zIndex.appBar,
  minHeight: DEFAULT_HEADER_HEIGHT + 'px',
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
