import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $artist, $artistError, getArtistPage, resetArtistPage } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';
import UnitPage from '../../components/unitPage';

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

  return (
    artist && (
      <UnitPage meta={artist.meta} type="artist">
        ARTIST CHILDRENS!!!!
      </UnitPage>
    )
  );
};

export default ArtistPage;
