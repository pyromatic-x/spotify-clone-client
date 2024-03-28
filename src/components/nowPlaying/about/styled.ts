import { Box, CardContent, CardMedia, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.popover,
  padding: '14px !important',
  fontSize: '0.95rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  borderBottomRightRadius: '8px',
  borderBottomLeftRadius: '8px',
}));
export const StyledCardMedia = styled(CardMedia)({
  height: '240px',
  position: 'relative',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
});

export const CardMediaShadow = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  padding: '16px',
  boxShadow: 'inset 0 55px 55px -7px rgba(0,0,0,0.8)',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
}));

export const CardWrapper = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1,
});
