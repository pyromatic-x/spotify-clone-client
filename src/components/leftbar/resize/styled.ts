import { Box, styled } from '@mui/material';

export const StyledResize = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'transparent',
  cursor: 'col-resize',
  padding: '0 4px',
  position: 'relative',

  '&:hover&::before': {
    content: "''",
    position: 'absolute',
    width: '1px',
    height: '100%',
    backgroundColor: theme.palette.grey[700],
  },
}));
