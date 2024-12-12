import { Box, Grid } from '@mui/material';
import HomeOverlay from './overlay';
import { useEffect } from 'react';
import { $homeCompilations, getHomeCompilations, resetHomeCompilations } from './effect';
import HomeFeatured from './featured';
import Row from '../../components/row';
import { useUnit } from 'effector-react';
import { $USER } from '../../components/auth/effect';

const HomePage = () => {
  const user = useUnit($USER);
  const compilations = useUnit($homeCompilations);

  useEffect(() => {
    getHomeCompilations();

    document.title = 'Spotify Clone';

    return resetHomeCompilations;
  }, []);

  return (
    <>
      <HomeOverlay />
      <Box zIndex={1} pt={1}>
        <HomeFeatured />

        <Grid container flexDirection="column" gap={5} position="relative" zIndex={1} mt={4}>
          {compilations?.forYou && <Row title={`Made For ${user?.username}`} items={compilations?.forYou} />}
          {compilations?.forYou && <Row title="Your top mixes" items={compilations?.mixes} />}
          {compilations?.recently && <Row title="Jump back in" items={compilations?.recently} />}
          {compilations?.favoriteArtists && (
            <Row title="Best of artists" items={compilations?.favoriteArtists} />
          )}
          {compilations?.albumsByFavoriteArtists && (
            <Row title="More of what you like" items={compilations?.albumsByFavoriteArtists} />
          )}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
