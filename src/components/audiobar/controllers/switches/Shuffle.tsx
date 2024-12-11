import { Shuffle as ShuffleIcon } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { $queue, toggleshuffle } from '../../effect';
import { useUnit } from 'effector-react';
import { StyledToggleButton } from './styled';

const AudiobarSwitchesShuffle = () => {
  const queue = useUnit($queue);

  const tooltip = queue?.shuffled ? 'Disable shuffle for ' : 'Enable shuffle for ';

  return (
    <Tooltip title={tooltip + queue?.name}>
      <span>
        <StyledToggleButton
          disabled={!queue}
          active={queue?.shuffled}
          variant="scalable"
          onClick={() => toggleshuffle()}
        >
          <ShuffleIcon />
        </StyledToggleButton>
      </span>
    </Tooltip>
  );
};

export default AudiobarSwitchesShuffle;
