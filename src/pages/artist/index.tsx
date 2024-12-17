import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $artist, $artistError, getArtistPage, resetArtistPage } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';
import UnitPage from '../../components/unitPage';
import TracksTableSimple from '../../components/unitPage/tracks/simple';
import { CollectionEnums } from '../../api/dto';

const ArtistPage = () => {
  const { id } = useParams();

  const artist = useUnit($artist);
  const error = useUnit($artistError);

  useEffect(() => {
    if (id) getArtistPage(id);

    return resetArtistPage;
  }, [id]);

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  if (error) return <Error />;

  const source = { type: 'artist' as Extract<keyof typeof CollectionEnums, 'artist'>, _id: id! };

  return (
    artist && (
      <UnitPage meta={artist.meta} type={source.type}>
        <TracksTableSimple tracks={artist.tracks} source={source} />
      </UnitPage>
    )
  );
};

export default ArtistPage;
