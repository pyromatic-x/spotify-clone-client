import { Box, BoxProps } from '@mui/material';

const MainContainer = ({ children, sx = {}, ...rest }: BoxProps) => (
  <Box
    sx={{
      borderRadius: '8px',
      backgroundColor: 'background.section',
      padding: '14px',
      position: 'relative',
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Box>
);

export default MainContainer;
