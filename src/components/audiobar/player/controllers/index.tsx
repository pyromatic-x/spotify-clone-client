import { Loop, Pause, PlayArrow, Shuffle, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Grid, Tooltip } from '@mui/material';
import { $loop, $shuffle, changeLoop, changeShuffle, nextTrack, prevTrack } from '../../effect';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { ControlButton, LoopButton, PlayPauseButton } from './styled';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { LoopTooltips, ShuffleTooltips } from '../../types';

function Controllers() {
  const { playing, play, pause, getPosition, seek, loop } = useGlobalAudioPlayer();
  const shuffle = useUnit($shuffle);
  const loopStore = useUnit($loop);

  useEffect(() => {
    loop(loopStore === 'TRACK');
  }, [loopStore]);

  const handleOnPrevTrack = () => {
    const position = getPosition();

    if (position > 3) seek(0);
    else prevTrack();
  };

  const ActionButton = playing ? Pause : PlayArrow;

  const shuffleTooltip = ShuffleTooltips[shuffle];
  const loopTooltip = LoopTooltips[loopStore];

  return (
    <Grid container columnGap={1} width="max-content" flexWrap="nowrap">
      <Tooltip title={shuffleTooltip}>
        <ControlButton active={shuffle !== 'DISABLED'} onClick={() => changeShuffle()}>
          <Shuffle color="secondary" />
        </ControlButton>
      </Tooltip>

      <ControlButton onClick={handleOnPrevTrack}>
        <SkipPrevious color="secondary" />
      </ControlButton>

      <PlayPauseButton onClick={playing ? pause : play}>
        <ActionButton sx={{ fontSize: '20px' }} />
      </PlayPauseButton>

      <ControlButton onClick={() => nextTrack()}>
        <SkipNext color="secondary" />
      </ControlButton>

      <Tooltip title={loopTooltip}>
        <LoopButton state={loopStore} active={loopStore !== 'DISABLED'} onClick={() => changeLoop()}>
          <Loop color="secondary" />
        </LoopButton>
      </Tooltip>
    </Grid>
  );
}

export default Controllers;
