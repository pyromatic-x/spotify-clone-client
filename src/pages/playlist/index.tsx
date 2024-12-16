import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $playlist, $playlistError, getPlaylistPageData, resetPlaylistPageData } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';

import UnitPage from '../../components/unitPage';
import TracksTable from '../../components/unitPage/components/tracks';

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

  return (
    playlist && (
      <UnitPage meta={playlist.meta} type="playlist">
        <TracksTable tracks={playlist.tracks} source={{ type: 'playlist', _id: playlist.meta._id }} />
      </UnitPage>
    )
  );
};

export default PlaylistPage;
