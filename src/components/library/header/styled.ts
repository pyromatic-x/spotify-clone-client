import { Box, ButtonBase, Chip, Grid, IconButton, styled } from '@mui/material';
import { HorizontalSplit as HorizontalSplitIcon } from '@mui/icons-material';

export const HeaderCategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.button,
  '&.active': {
    backgroundColor: 'white',
    color: 'black',
  },
}));

export const HeaderCategoryIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.button,
  height: '32px',
  width: '32px',
  '& svg': {
    fill: 'secondary.main',
  },
}));

export const LibraryHeaderContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'shadow',
})<{ shadow: boolean }>(({ theme, shadow }) => ({
  position: 'sticky',
  top: '0',
  rowGap: '16px',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.section,
  width: '100%',
  zIndex: 1,
  boxShadow: '0px 0px 0px 0 rgba(0, 0, 0, 0)',
  transition: 'box-shadow 0.2s ease',
  padding: '16px  16px  12px 22px ',

  ...(shadow && {
    boxShadow: '0 9px 14px -4px rgba(0, 0, 0, 1)',
  }),
}));

export const LibraryHeaderIcon = styled(HorizontalSplitIcon)({
  transform: 'rotate(270deg)',
});

export const LibraryHeaderButton = styled(ButtonBase)(({ theme }) => ({
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

export const StyledLibraryTableHeader = styled(Box)(({ theme }) => ({
  display: 'grid',
  margin: '0 -8px',
  gridTemplateColumns: '60% 20% 20%',
  paddingBottom: '5px',
  borderBottom: `1px solid ${theme.palette.background.slider}`,

  '& > p': {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
}));
