import {
  VolumeUp as Volume100,
  VolumeDown as Volume66,
  VolumeMute as Volume33,
  VolumeOff as Volume0,
} from '@mui/icons-material';
import { Grid, IconButton, Slider, Tooltip } from '@mui/material';
import { useUnit } from 'effector-react';
import { memo, useEffect } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { $muted, $volume, changeVolume, mute as muteEvent } from '../effect';

const AudiobarMetaVolume = () => {
  const volume = useUnit($volume);
  const muted = useUnit($muted);
  const { setVolume, mute } = useGlobalAudioPlayer();

  const tooltip = volume === 0 || muted ? 'Unmute' : 'Mute';

  let Icon = Volume100;
  if (volume === 0 || muted) Icon = Volume0;
  else if (volume > 0.66) Icon = Volume100;
  else if (volume > 0.33) Icon = Volume66;
  else if (volume > 0) Icon = Volume33;

  useEffect(() => {
    setVolume(volume);
  }, [volume]);

  const handleOnChange = (event: any) => {
    const val = event.target.value as number;

    setVolume(val);
    changeVolume(val);
  };
  const handleOnClick = () => {
    mute(!muted);
    muteEvent(!muted);
  };

  return (
    <Grid container alignItems="center" gap={0.5} width="max-content" wrap="nowrap" mr={0.5}>
      <Tooltip title={tooltip}>
        <IconButton onClick={handleOnClick}>
          <Icon sx={{ fontSize: '1.2rem' }} />
        </IconButton>
      </Tooltip>
      <Slider
        defaultValue={0}
        sx={{ width: '100px' }}
        step={0.01}
        min={0}
        max={1}
        onChange={handleOnChange}
        value={muted ? 0 : volume}
      />
    </Grid>
  );
};

export default memo(AudiobarMetaVolume);
