import { Chip, styled } from '@mui/material';

export const ChipStyled = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.button,
  '&.active': {
    backgroundColor: 'white',
    color: 'black',
  },
}));
