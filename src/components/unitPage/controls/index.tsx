import { useEffect, useRef } from 'react';
import { changeMainSticky } from '../../main/effect';
import { UnitPageProps } from '../meta/types';
import UnitPageArtistControls from './Artist';
import UnitPagePlaylistAlbumControls from './PlaylistOrAlbum';
import UnitPageUserControls from './User';
import { Box } from '@mui/material';

const UnitPageControls = ({ type, meta }: UnitPageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      changeMainSticky({
        _id: meta._id,
        name: (meta.name || meta.username)!,
        type,
        ref,
      });
    }
  }, [ref.current]);

  return (
    <Box ref={ref}>
      {(type === 'playlist' || type === 'album') && (
        <UnitPagePlaylistAlbumControls type={type} _id={meta._id} />
      )}

      {type === 'artist' && <UnitPageArtistControls _id={meta._id} />}

      {type === 'user' && <UnitPageUserControls _id={meta._id} />}
    </Box>
  );
};

export default UnitPageControls;
