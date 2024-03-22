import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
  gridArea: 'audiobar',
  display: 'grid',
  gridTemplateColumns: '25% 1fr 25%',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '14px 16px',
});
