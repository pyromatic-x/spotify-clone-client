import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import Error from '../Error';
import { $album, $albumError } from './effect';
import { getAlbumPageData } from './effect';
import { resetAlbumPageData } from './effect';
import UnitPage from '../../components/unitPage';

const AlbumPage = () => {
  const { id } = useParams();
  const album = useUnit($album);
  const error = useUnit($albumError);
  useEffect(() => {
    if (id) getAlbumPageData(id);
    return resetAlbumPageData;
  }, [id]);
  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);
  if (error) return <Error />;
  return album && <UnitPage unit={album} type="album" />;
};

export default AlbumPage;
