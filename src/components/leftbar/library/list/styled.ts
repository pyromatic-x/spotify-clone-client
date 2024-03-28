import { Avatar, Box, List, ListItem, styled } from '@mui/material';

export const ListWrapper = styled(Box)(() => ({
  overflowY: 'scroll',
  width: 'calc(100% + 24px)',
  margin: '0 -12px',
}));

export const StyledList = styled(List)({
  width: 'calc(100% + 6px)',
  padding: 0,
  margin: '0 -3px',
});

export const Item = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded?: boolean }>(({ theme, expanded }) => ({
  padding: '4px 8px',
  minHeight: '62px',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'grid',
  gridTemplateColumns: expanded ? '60% 1fr 1fr' : '100%',

  '& .MuiListItemText-primary': {
    fontSize: '0.95rem',
  },
  '& .MuiListItemText-secondary': {
    fontSize: '0.8rem',
  },

  '&:hover': {
    backgroundColor: theme.palette.hover.card,
  },
}));

export const CollapsedItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '6px',
  borderRadius: '6px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.hover.card,
  },
}));

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type: 'square' | 'circle' }>(({ type }) => ({
  borderRadius: type === 'square' ? '6px' : '50%',
}));
