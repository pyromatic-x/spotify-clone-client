import { Grid } from '@mui/material';
import { Devices, Lyrics, OpenInFull } from '@mui/icons-material';
import IconWithTooltip from './Icon';
import Volume from './Volume';
import QueueButton from './queue';
import NowPlayingButton from './nowPlaying';

const Additional = () => (
  <Grid container flexWrap="nowrap" columnGap={1.35} width="max-content" justifySelf="end">
    <NowPlayingButton />
    <IconWithTooltip tooltip="Lyrics" Icon={Lyrics} />
    <QueueButton />
    <IconWithTooltip tooltip="Connect to a device" Icon={Devices} />
    <Volume />
    <IconWithTooltip tooltip="Full screen" Icon={OpenInFull} />
  </Grid>
);

export default Additional;
