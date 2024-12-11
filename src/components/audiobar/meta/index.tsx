import { Grid, IconButton, SvgIconTypeMap, Tooltip } from '@mui/material';

import {
  Slideshow as NowPlayingIcon,
  SettingsVoice as LyricsIcon,
  QueueMusic as QueueIcon,
  Speaker as DevicesIcon,
  Tab as MiniplayerIcon,
  OpenInFull as FullscreenIcon,
} from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import AudiobarMetaVolume from './Volume';
import { memo } from 'react';

const Button = ({
  title,
  Icon,
}: {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
}) => (
  <Tooltip title={title}>
    <IconButton variant="scalable" sx={{ '& svg': { fontSize: '1.2rem' } }}>
      <Icon />
    </IconButton>
  </Tooltip>
);

const AudiobarMeta = () => {
  return (
    <Grid container gap={0.1} justifyContent="flex-end" alignItems="center" wrap="nowrap">
      <Button title="Now playing view" Icon={NowPlayingIcon} />
      <Button title="Lyrics" Icon={LyricsIcon} />
      <Button title="Queue" Icon={QueueIcon} />
      <Button title="Connect to a device" Icon={DevicesIcon} />
      <AudiobarMetaVolume />
      <Button title="Open Miniplayer" Icon={MiniplayerIcon} />
      <Button title="Open Full screen" Icon={FullscreenIcon} />
    </Grid>
  );
};

export default memo(AudiobarMeta);
