import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)({
  width: '22px',
  height: '36px',
  padding: '0px',
  '& svg': {
    fontSize: '18px',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '& svg': {
      fill: 'white',
    },
  },
});
