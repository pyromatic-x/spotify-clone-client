import { Box, ListItem, Popover, styled } from '@mui/material';

export const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '8px',
    backgroundColor: theme.palette.secondary.light,
    backgroundImage: 'none',
    boxShadow: 'none',
    overflow: 'visible',

    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: '-10px',
      left: 'calc(50% - 10px)',
      width: '0',
      height: '0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: `10px solid ${theme.palette.secondary.light}`,
    },
  },
}));

export const PopoverContent = styled(Box)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 32px 14px 32px',
  maxWidth: '320px',
  gap: '1.5rem',
  position: 'relative',
}));

export const ContentRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',

  '&:not(:first-child) svg': {
    fontSize: '1.6rem',
    fill: theme.palette.secondary.main,
  },

  '&:first-child span': {
    color: theme.palette.green.main,
  },
}));

export const RowText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '& span': {
    fontSize: '0.85rem',
    color: theme.palette.secondary.main,
  },
}));

export const StyledListItem = styled(ListItem)(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  margin: '0 -20px',
  width: 'calc(100% + 40px)',
  borderRadius: '4px',
  cursor: 'pointer',

  '& p': {
    fontSize: '0.95rem',
  },

  '& svg': {
    fontSize: '1.2rem',
  },

  '&:hover': {
    backgroundColor: '#313131',
  },
}));
