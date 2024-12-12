import { Tooltip } from '@mui/material';
import { StyledButton } from './styled';
import { Tab as MiniplayerIcon } from '@mui/icons-material';

const AudiobarMetaPiP = () => (
  <Tooltip title="Open Miniplayer">
    <span>
      <StyledButton disabled={true}>
        <MiniplayerIcon />
      </StyledButton>
    </span>
  </Tooltip>
);

export default AudiobarMetaPiP;
