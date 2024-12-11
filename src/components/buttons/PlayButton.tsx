import { useUnit } from 'effector-react';
import { PlayDtoPayload } from '../../api/dto/play';
import { StyledPlayButton } from './styled';
import { PlayArrow as PlayIcon, Pause as PauseIcon } from '@mui/icons-material/';
import { $queue, changeQueue } from '../audiobar/effect';
import { memo } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

type TProps = {
  size?: number;
} & PlayDtoPayload;

const PlayButton = ({ size, type, _id }: TProps) => {
  const queue = useUnit($queue);
  const { playing, togglePlayPause } = useGlobalAudioPlayer();

  const handleOnClick = () => {
    if (queue?.target === _id) togglePlayPause();
    else changeQueue({ _id, type });
  };

  return (
    <StyledPlayButton className={`playbutton playbutton_${_id}`} size={size} onClick={handleOnClick}>
      {queue?.target === _id && playing ? <PauseIcon /> : <PlayIcon />}
    </StyledPlayButton>
  );
};

export default memo(PlayButton);
