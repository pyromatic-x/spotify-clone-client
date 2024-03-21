import { Button, Grid, IconButton, styled } from '@mui/material';
import { HorizontalSplit as HorizontalSplitIcon } from '@mui/icons-material';

export const LibraryButton = styled(Button)(({ theme }) => ({
  padding: 0,
  color: theme.palette.secondary.main,
  fontWeight: 'bold',
  fontSize: '18px',
  minWidth: 'max-content',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'white',
  },
  '& .MuiButton-startIcon': {
    marginLeft: 0,
    '& svg': {
      fontSize: '2rem',
    },
  },
  '& svg': {
    fontSize: '2rem',
  },
  '&.shadow': {
    boxShadow: '6px 6px 10px 0 black',
    zIndex: 1,
  },
}));

export const LibraryIcon = styled(HorizontalSplitIcon)({
  transform: 'rotate(270deg)',
});

export const HeaderContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'shadow' && prop !== 'expanded',
})<{ shadow: boolean; expanded: boolean }>(({ theme, shadow, expanded }) => ({
  position: 'sticky',
  top: '0',
  rowGap: '16px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.section,
  width: 'calc(100% + 24px)',
  margin: '0 -12px',
  padding: `0 12px ${expanded ? '0' : '12px'} 12px`,
  zIndex: 1,
  boxShadow: '0px 0px 0px 0 rgba(0, 0, 0, 0)',
  transition: 'box-shadow 0.2s ease',

  ...(shadow && {
    boxShadow: '0 9px 14px -4px rgba(0, 0, 0, 1)',
  }),
}));

export const ClearIconButton = styled(IconButton)({
  backgroundColor: 'secondary.light',
  height: '32px',
  width: '32px',
  '& svg': {
    fill: 'secondary.main',
  },
});
