import { memo } from 'react';
import { Grid } from '@mui/material';
import Controllers from './controllers';
import Seeker from './Seeker';
import AudioHandler from './AudioHandler';

const Player = memo(() => {
  return (
    <Grid container justifyContent="center" justifySelf="center" width={'34vw'}>
      <Controllers />
      <Seeker />
      <AudioHandler />
    </Grid>
  );
});

export default Player;
