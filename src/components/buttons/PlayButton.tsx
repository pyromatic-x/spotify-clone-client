import { useUnit } from 'effector-react';
import { PlayDtoPayload } from '../../api/dto/play';
import { StyledPlayButton, StyledSimplePlayButton } from './styled';
import { PlayArrow as PlayIcon, Pause as PauseIcon } from '@mui/icons-material/';
import { $queue, changeQueue, changeTrack } from '../audiobar/effect';
import { memo, MouseEvent } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { Tooltip } from '@mui/material';

type TProps = {
  title?: string;
  source: {
    index?: number;
  } & PlayDtoPayload;

  size?: number;
  simple?: boolean;
};

const PlayButton = ({ size, source, title, simple }: TProps) => {
  const queue = useUnit($queue);
  const { playing, togglePlayPause, isLoading } = useGlobalAudioPlayer();

  const { _id, type, index } = source;

  const isPlaying =
    queue?.target === _id && (playing || isLoading) && (index !== undefined ? queue.current === index : true);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (queue?.target === _id) {
      if (index !== undefined) {
        if (queue.current === index) {
          togglePlayPause();
        } else changeTrack(index);
      } else {
        togglePlayPause();
      }
    } else changeQueue({ _id, type, index });
  };

  return simple ? (
    <Tooltip title={playing ? 'Pause' : `Play ${title}`}>
      <StyledSimplePlayButton
        className={`simple-playbutton simple-playbutton_${_id}`}
        onClick={handleOnClick}
        size={size}
        disableRipple
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </StyledSimplePlayButton>
    </Tooltip>
  ) : (
    <Tooltip title={`Play ${title}`}>
      <StyledPlayButton
        className={`playbutton playbutton_${_id}`}
        size={size}
        onClick={handleOnClick}
        disableRipple
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </StyledPlayButton>
    </Tooltip>
  );
};

export default memo(PlayButton);
