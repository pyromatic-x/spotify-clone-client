import TracksTableHead from './Head';
import TracksTableBody from './Body';
import { TrackDto } from '../../../../api/dto/track';
import { PlayDtoPayload } from '../../../../api/dto/play';
import { CollectionEnums } from '../../../../api/dto';
import { StyledTracksTable } from './styled';
import TracksTableControls from './controls';

type TProps = {
  tracks: Array<TrackDto>;
  source: {
    _id: string;
    type: keyof typeof CollectionEnums;
  };
};

const TracksTable = ({ tracks, source }: TProps) => {
  return (
    <>
      {source.type !== 'artist' && source.type !== 'user' && (
        <TracksTableControls source={source as PlayDtoPayload} />
      )}
      <StyledTracksTable>
        {source.type !== 'artist' && source.type !== 'user' && <TracksTableHead type={source.type} />}
        {source.type !== 'user' && <TracksTableBody tracks={tracks} source={source as PlayDtoPayload} />}
      </StyledTracksTable>
    </>
  );
};

export default TracksTable;
