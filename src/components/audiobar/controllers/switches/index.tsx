import { Grid, IconButton, Tooltip } from '@mui/material';
import {
  SkipPrevious as PreviousIcon,
  SkipNext as NextIcon,
  PlayCircle as PlayIcon,
  PauseCircle as PauseCircle,
} from '@mui/icons-material';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { $queue, next, prev } from '../../effect';
import { StyledNextPrevButton } from './styled';
import AudiobarSwitchesShuffle from './Shuffle';
import AudiobarSwitchesRepeat from './Repeat';
import { useUnit } from 'effector-react';

const PlayPause = ({ disabled }: { disabled: boolean }) => {
  const { playing, togglePlayPause } = useGlobalAudioPlayer();

  const Icon = playing ? PauseCircle : PlayIcon;
  const tooltip = playing ? 'Pause' : 'Play';

  return (
    <Tooltip title={tooltip}>
      <span>
        <IconButton onClick={() => togglePlayPause()} variant="scalable" disabled={disabled}>
          <Icon sx={{ fontSize: '2.5rem', fill: 'white' }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

const AudiobarSwitches = () => {
  const queue = useUnit($queue);

  const { getPosition, seek, playing, play } = useGlobalAudioPlayer();

  const onPrev = () => {
    const position = getPosition();
    position > 3 ? seek(0) : prev();
  };
  const onNext = () => {
    next();

    if (!playing) play();
  };

  return (
    <Grid container alignItems="center" justifyContent="center" wrap="nowrap" gap={1.7}>
      <AudiobarSwitchesShuffle />

      <Tooltip title="Previous" onClick={onPrev}>
        <span>
          <StyledNextPrevButton variant="scalable" disabled={!queue}>
            <PreviousIcon />
          </StyledNextPrevButton>
        </span>
      </Tooltip>

      <PlayPause disabled={!queue} />

      <Tooltip title="Next">
        <span>
          <StyledNextPrevButton variant="scalable" onClick={onNext} disabled={!queue}>
            <NextIcon />
          </StyledNextPrevButton>
        </span>
      </Tooltip>

      <AudiobarSwitchesRepeat />
    </Grid>
  );
};

export default AudiobarSwitches;
