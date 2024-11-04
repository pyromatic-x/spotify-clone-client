import { Container } from './styled';
import Meta from './meta';
import Additional from './additional';
import Player from './player';

const AudioBar = () => {
  return (
    <Container>
      <Meta />
      <Player />
      <Additional />
    </Container>
  );
};

export default AudioBar;
