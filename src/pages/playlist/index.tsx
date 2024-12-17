import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $playlist, $playlistError, getPlaylistPageData, resetPlaylistPageData } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';

import UnitPage from '../../components/unitPage';
import TracksTable from '../../components/unitPage/tracks';
import { CollectionEnums } from '../../api/dto';

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

  const source = { type: 'playlist' as Extract<keyof typeof CollectionEnums, 'playlist'>, _id: id! };

  return (
    playlist && (
      <UnitPage meta={playlist.meta} type={source.type}>
        <TracksTable source={source} tracks={playlist.tracks} />
      </UnitPage>
    )
  );
};

export default PlaylistPage;
