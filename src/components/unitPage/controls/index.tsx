import { UnitPageProps } from '../meta/types';
import UnitPageArtistControls from './Artist';
import UnitPagePlaylistAlbumControls from './PlaylistOrAlbum';
import UnitPageUserControls from './User';

const UnitPageControls = ({ type, meta }: UnitPageProps) => {
  if (type === 'playlist' || type === 'album')
    return <UnitPagePlaylistAlbumControls type={type} _id={meta._id} />;
  else if (type === 'artist') return <UnitPageArtistControls _id={meta._id} />;
  else if (type === 'user') return <UnitPageUserControls _id={meta._id} />;

  return <></>;
};

export default UnitPageControls;
