import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
  gridArea: 'audiobar',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  padding: '0 8px',
  gap: 10,
});
