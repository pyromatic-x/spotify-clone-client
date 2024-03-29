import { Card, styled } from '@mui/material';

export const StyledSearchCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  aspectRatio: '1',
  position: 'relative',
  cursor: 'pointer',
  backgroundColor: color,
  width: '100%',

  '& .MuiCardMedia-root': {
    position: 'absolute',
    right: '-9%',
    bottom: '-4%',
    height: '60%',
    width: '60%',
    transform: 'rotate(27deg)',
    boxShadow:
      '0px 7px 9px -3px rgba(0,0,0,0.2),0px 14px 24px 2px rgba(0,0,0,0.14),0px 7px 30px 6px rgba(0,0,0,0.12)',
  },
}));
