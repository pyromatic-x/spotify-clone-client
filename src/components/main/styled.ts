import { Box, styled } from '@mui/material';

export const MainContainerWrapper = styled(Box)(({ theme }) => ({
  gridArea: 'main',
  position: 'relative',
  backgroundColor: theme.palette.background.main,
  padding: '5px 14px 20px 14px',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
  overflow: 'scroll',
}));
