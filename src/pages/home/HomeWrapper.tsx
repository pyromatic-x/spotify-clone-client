import { Box, Grid } from '@mui/material';
import Background from '../../components/home/background';
import { PropsWithChildren } from 'react';

function HomeWrapper({ children }: PropsWithChildren) {
  return (
    <Box position="relative">
      <Background />
      <Grid position="relative" container direction="column" gap={3.5} zIndex={1}>
        {children}
      </Grid>
    </Box>
  );
}

export default HomeWrapper;
