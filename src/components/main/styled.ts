import { Box, styled } from '@mui/material';

export const MainContainerWrapper = styled(Box)(({ theme }) => ({
  gridArea: 'main',
  position: 'relative',
  backgroundColor: theme.palette.background.main,
  padding: '5px 14px 20px 14px',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
  overflow: 'scroll',
}));

export const MainStickyContainer = styled(Box)(({}) => ({
  position: 'fixed',
  top: '68px',

  margin: '0 -14px',
  borderTopLeftRadius: '7px',
  borderTopRightRadius: '7px',

  zIndex: 100,
  transition: 'opacity 0.25s ease',
}));

export const MainStickyContainerTitle = styled(Box)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '24px',
  height: '60px',
  borderTopLeftRadius: '7px',
  borderTopRightRadius: '7px',

  '& button': {
    marginRight: '12px',
  },
}));
