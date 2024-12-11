import { Grid } from '@mui/material';
import AudioHandler from './AudioHandler';
import AudiobarSeeker from './Seeker';
import AudiobarSwitches from './switches';

const AudiobarControllers = () => (
  <Grid width="100%" maxWidth="690px">
    <AudiobarSwitches />
    <AudiobarSeeker />
    <AudioHandler />
  </Grid>
);

export default AudiobarControllers;
