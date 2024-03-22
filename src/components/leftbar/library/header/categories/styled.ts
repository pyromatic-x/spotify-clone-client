import { Chip, styled } from '@mui/material';

export const ChipStyled = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  '&.active': {
    backgroundColor: 'white',
    color: 'black',
  },
}));
