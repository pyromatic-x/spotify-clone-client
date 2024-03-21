import { Box, Card, SvgIcon, styled } from '@mui/material';
import { hexToRgbA } from '../../../../utils/strings';

export const StyledCard = styled(Card)({
  display: 'flex',
  height: '80px',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '& .MuiCardContent-root': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(179,179,179, 0.1)',
    transition: '0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, 0.15);',
    },
  },

  '&:hover .MuiIconButton-root': {
    opacity: '1',
  },

  '& img': {
    maxWidth: '80px',
  },

  '& .MuiCardContent-root:last-child': {
    paddingBottom: '16px',
  },
});

export const LikedSongsImage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '80px',
  heigh: '100%',
  background: 'linear-gradient(135deg, rgba(63,19,185,1) 0%, rgba(124,146,135,1) 100%)',
});

export const MediaContainer = styled(Box)({
  minWidth: '80px',
  height: '80px',
  position: 'relative',
});

export const MediaBackground = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: string }>(({ accent }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',

  '& path': {
    fill: hexToRgbA(accent, 0.85),
  },
}));
