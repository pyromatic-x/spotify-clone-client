import { Box, styled } from '@mui/material';
import { StyledTracksTable } from '../unitPage/tracks/styled';

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
export const MainStickyContainerTableWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.hover.main,
  width: '100%',
  padding: '0 20px',
  position: 'relative',

  '&:after': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: '#808080',
  },
}));
export const MainStickyContainerTable = styled(StyledTracksTable)(({}) => ({
  width: '100%',
  margin: '0 auto',
  maxWidth: '1920px',

  '& .MuiTableCell-root:nth-of-type(2)': {
    padding: '2px 16px 2px 22px',
    width: '38%',
  },

  '& .MuiTableCell-root:nth-of-type(6)': {
    width: '84px',
  },
}));
