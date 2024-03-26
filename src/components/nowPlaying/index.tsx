import { Grid } from '@mui/material';
import AboutCard from './about';
import Header from './header';
import Credits from './credits';
import Tours from './tours';
import { useUnit } from 'effector-react';
import { $nowPlaying } from './effect';

const NowPlaying = () => {
  const { artist, track } = useUnit($nowPlaying);

  return (
    <Grid container flexDirection="column" gap={2}>
      <Header />
      {artist?.about && <AboutCard />}
      {track?.credits && <Credits />}
      {artist?.tours && <Tours />}
    </Grid>
  );
};

export default NowPlaying;
