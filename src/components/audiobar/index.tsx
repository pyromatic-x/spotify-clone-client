import { Container } from './styled';

import AudiobarControllers from './controllers';
import AudiobarInfo from './info';
import AudiobarMeta from './meta';
import { memo, useEffect } from 'react';
import { init } from './effect';

const AudioBar = () => {
  useEffect(() => init(), []);

  return (
    <Container>
      <AudiobarInfo />
      <AudiobarControllers />
      <AudiobarMeta />
    </Container>
  );
};

export default memo(AudioBar);
