import { VolumeDown, VolumeOff } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import IconWithTooltip from './Icon';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const Volume = () => {
  const { volume, muted, setVolume, mute } = useGlobalAudioPlayer();

  const _muted = typeof muted === 'object' ? false : muted; // package bug fix

  const Icon = _muted ? VolumeOff : VolumeDown;
  const tooltip = _muted ? 'Unmute' : 'Mute';

  const handleOnVolumeChange = (value: number) => {
    setVolume(value);

    mute(value <= 0);
  };
  const handleOnIconClick = () => {
    if (!volume) {
      mute(false);
      setVolume(1);
    } else mute(!_muted);
  };

  return (
    <Grid container alignItems="center" columnGap={0.8} flexWrap="nowrap">
      <IconWithTooltip tooltip={tooltip} Icon={Icon} onClick={() => handleOnIconClick()} />
      <Slider
        defaultValue={1}
        value={_muted ? 0 : volume}
        min={0}
        step={0.01}
        max={1}
        sx={{ width: '80px' }}
        onChange={(_, value) => handleOnVolumeChange(value as number)}
      />
    </Grid>
  );
};

export default Volume;
