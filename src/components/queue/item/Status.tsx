import { IconButton, Typography } from '@mui/material';
import PlayingAnimation from '../PlayingAnimation';
import { Pause, PlayArrow } from '@mui/icons-material';
import { StatusContainer } from './styled';

type IProps = {
  id: string;
  index: number;
  active: boolean;
  playing: boolean;
  hovering: boolean;
  actions: {
    play(): void;
    pause(): void;
    change(id: string): void;
  };
};

function Status({ id, index, active, playing, hovering, actions }: IProps) {
  const NotHoveringNotPlaying = () => (
    <Typography color={active ? 'green.main' : 'white'} className="index-number" textAlign="center">
      {index}
    </Typography>
  );

  const NotHoveringPlaying = () =>
    active ? (
      <IconButton disableRipple sx={{ padding: 0 }}>
        <PlayingAnimation />
      </IconButton>
    ) : (
      <NotHoveringNotPlaying />
    );

  const HoveringNotPlaying = () => (
    <IconButton
      disableRipple
      sx={{ padding: 0 }}
      onClick={() => (active ? actions.play() : actions.change(id))}
    >
      <PlayArrow />
    </IconButton>
  );

  const HoveringPlaying = () =>
    active ? (
      <IconButton disableRipple sx={{ padding: 0 }} onClick={() => actions.pause()}>
        <Pause />
      </IconButton>
    ) : (
      <HoveringNotPlaying />
    );

  return (
    <StatusContainer>
      {!hovering && !playing && <NotHoveringNotPlaying />}
      {!hovering && playing && <NotHoveringPlaying />}
      {hovering && !playing && <HoveringNotPlaying />}
      {hovering && playing && <HoveringPlaying />}
    </StatusContainer>
  );
}

export default Status;
