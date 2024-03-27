import { useUnit } from 'effector-react';
import { $rightbarContent, setRightbarContent } from '../../rightbar/effect';
import IconWithTooltip from './Icon';
import { QueueMusicRounded } from '@mui/icons-material';

const QueueButton = () => {
  const rightbarContent = useUnit($rightbarContent);

  const handleOnClick = () => {
    setRightbarContent(rightbarContent === 'QUEUE' ? null : 'QUEUE');
  };

  return (
    <IconWithTooltip
      tooltip="Queue"
      Icon={QueueMusicRounded}
      onClick={() => handleOnClick()}
      active={rightbarContent === 'QUEUE'}
    />
  );
};

export default QueueButton;