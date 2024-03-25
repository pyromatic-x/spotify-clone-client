import { useUnit } from 'effector-react';
import { $rightbarContent, setRightbarContent } from '../../rightbar/effect';
import IconWithTooltip from './Icon';
import { Airplay } from '@mui/icons-material';

const NowPlayingButton = () => {
  const rightbarContent = useUnit($rightbarContent);

  const handleOnClick = () => {
    setRightbarContent(rightbarContent === 'NOW_PLAYING' ? null : 'NOW_PLAYING');
  };

  return (
    <IconWithTooltip
      tooltip="Now Playing View"
      Icon={Airplay}
      onClick={() => handleOnClick()}
      active={rightbarContent === 'NOW_PLAYING'}
    />
  );
};

export default NowPlayingButton;
