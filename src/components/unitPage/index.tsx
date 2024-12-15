import { Box } from '@mui/material';

import { CollectionEnums } from '../../api/dto';
import { AlbumPageDto } from '../../api/dto/album';
// import { ArtistPageDataDto } from '../../api/dto/artist';
// import { UserPageDto } from '../../api/dto/user';
import { PlaylistPageDto } from '../../api/dto/playlist';
import PageHeader from '../pageHeader';
import TracksTable from './components/tracks';

type TProps = {
  type: keyof typeof CollectionEnums;
  unit: PlaylistPageDto | AlbumPageDto; // | ArtistPageDataDto | UserPageDto;
};

const UnitPage = ({ type, unit }: TProps) => {
  return (
    <>
      <PageHeader {...unit.meta} />
      <Box position="relative" zIndex={1} pb={7}>
        {unit?.tracks && <TracksTable tracks={unit.tracks} source={{ type, _id: unit.meta._id }} />}
      </Box>
    </>
  );
};

export default UnitPage;
