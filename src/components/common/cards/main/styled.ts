import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: '10px',
  backgroundColor: 'transparent',
  transition: '0.25s ease',
  cursor: 'pointer',
  backgroundImage: 'none',
  boxShadow: 'none',
  overflow: 'hidden',
  width: '100%',

  '&:hover': {
    backgroundColor: theme.palette.hover.card,

    '& .MuiIconButton-root': {
      opacity: '1',
    },
  },
}));
