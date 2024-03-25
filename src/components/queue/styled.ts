import { Box, Button, styled } from '@mui/material';

export const Tabs = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'addShadow',
})<{ addShadow: boolean }>(({ theme, addShadow }) => ({
  display: 'flex',
  padding: '14px',
  margin: '0 -14px',
  position: 'absolute',
  top: '-14px',
  width: 'calc(100% + 28px)',
  transition: 'box-shadow 0.2s ease-in-out',
  backgroundColor: theme.palette.background.section,
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  zIndex: 1,

  ...(addShadow && {
    boxShadow: '0 9px 14px -4px rgba(0, 0, 0, 1)',
  }),
}));

export const Content = styled(Box)(() => ({
  overflow: 'scroll',
  maxHeight: 'calc(100vh - 108px)',
  margin: '0 -4px',
  paddingTop: '70px',
}));

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  padding: '10px 8px',
  color: theme.palette.common.white,
  borderRadius: '0',
  position: 'relative',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: '#1A1A1A',
  },
  '&:active': {
    backgroundColor: theme.palette.common.black,
  },

  ...(active && {
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: '5px',
      height: '2px',
      width: 'calc(100% - 16px)',
      backgroundColor: theme.palette.green.main,
    },
  }),
}));

StyledButton.defaultProps = {
  disableRipple: true,
};
