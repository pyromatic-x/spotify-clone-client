import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $artist, $artistError, getArtistPage, resetArtistPage } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';
import UnitPage from '../../components/unitPage';
import TracksTableSimple from '../../components/unitPage/tracks/simple';
import { CollectionEnums } from '../../api/dto';
import { Grid } from '@mui/material';
import { $mainContainer } from '../../components/main/effect';
import ArtistPageLikedSongs from './LikedSongs';
import Row from '../../components/row';
import ArtistPageAbout from './About';

const ArtistPage = () => {
  const { id } = useParams();

  const artist = useUnit($artist);
  const error = useUnit($artistError);
  const { width } = useUnit($mainContainer);

  useEffect(() => {
    if (id) getArtistPage(id);

    return resetArtistPage;
  }, [id]);

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  if (error) return <Error />;

  console.log(width);

  const source = { type: 'artist' as Extract<keyof typeof CollectionEnums, 'artist'>, _id: id! };

  return (
    artist && (
      <UnitPage meta={artist.meta} type={source.type}>
        <Grid container alignItems="start" flexWrap={width <= 1100 ? 'wrap' : 'nowrap'} gap={4} mb={6}>
          <TracksTableSimple tracks={artist.tracks} source={source} />
          <ArtistPageLikedSongs {...artist.meta} />
        </Grid>
        <Grid container flexDirection="column" gap={5}>
          <Row title="Discography" items={artist.discography} />
          <Row title="Fans also like" items={artist.similar} />
          <Row title="Discovered on" items={artist.discovered} />
          {artist.about && <ArtistPageAbout {...artist.about} />}
        </Grid>
      </UnitPage>
    )
  );
};

export default ArtistPage;
