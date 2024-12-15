import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $playlist, $playlistError, getPlaylistPageData, resetPlaylistPageData } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';

import UnitPage from '../../components/unitPage';

const PlaylistPage = () => {
  const { id } = useParams();

  const playlist = useUnit($playlist);
  const error = useUnit($playlistError);

  useEffect(() => {
    if (id) getPlaylistPageData(id);

    return resetPlaylistPageData;
  }, [id]);

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  if (error) return <Error />;

  return playlist && <UnitPage unit={playlist} type="playlist" />;
};

export default PlaylistPage;
