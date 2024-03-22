import { Grid } from '@mui/material';
import { Airplay, Devices, Lyrics, OpenInFull, QueueMusicRounded } from '@mui/icons-material';
import IconWithTooltip from './Icon';
import Volume from './Volume';

const Additional = () => (
  <Grid container flexWrap="nowrap" columnGap={1.35} width="max-content" justifySelf="end">
    <IconWithTooltip tooltip="Now Playing View" Icon={Airplay} />
    <IconWithTooltip tooltip="Lyrics" Icon={Lyrics} />
    <IconWithTooltip tooltip="Queue" Icon={QueueMusicRounded} />
    <IconWithTooltip tooltip="Connect to a device" Icon={Devices} />
    <Volume />
    <IconWithTooltip tooltip="Full screen" Icon={OpenInFull} />
  </Grid>
);

export default Additional;
