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
  width: '200px',

  '&:hover': {
    backgroundColor: theme.palette.background.cardHover,

    '& .MuiIconButton-root': {
      opacity: '1',
    },
  },
}));
