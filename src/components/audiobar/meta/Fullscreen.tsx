import { Tooltip } from '@mui/material';
import { StyledButton } from './styled';
import { OpenInFull as FullscreenIcon } from '@mui/icons-material';

const AudiobarMetaFullscreen = () => (
  <Tooltip title="Fullscreen">
    <span>
      <StyledButton disabled={true}>
        <FullscreenIcon />
      </StyledButton>
    </span>
  </Tooltip>
);

export default AudiobarMetaFullscreen;
