import { Repeat as RepeatIcon, RepeatOne as RepeatOneIcon } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { $queue, toggleRepeat } from '../../effect';
import { useUnit } from 'effector-react';
import { StyledToggleButton } from './styled';
import { RepeatVariants } from '../../types';

const AudiobarSwitchesRepeat = () => {
  const queue = useUnit($queue);

  const tooltip = RepeatVariants[queue?.repeat ?? 'DISABLED'];
  const active = !queue ? false : queue?.repeat !== 'DISABLED';

  return (
    <Tooltip title={tooltip}>
      <span>
        <StyledToggleButton
          disabled={!queue}
          active={active}
          variant="scalable"
          onClick={() => toggleRepeat()}
        >
          {queue?.repeat === 'TRACK' ? <RepeatOneIcon /> : <RepeatIcon />}
        </StyledToggleButton>
      </span>
    </Tooltip>
  );
};

export default AudiobarSwitchesRepeat;
