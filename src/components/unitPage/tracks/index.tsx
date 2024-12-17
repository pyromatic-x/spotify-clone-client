import TracksTableBody from './Body';
import TracksTableHead from './Head';
import { StyledTracksTable } from './styled';
import { TracksTableProps } from './types';

const TracksTable = ({ tracks, source }: TracksTableProps) => {
  return (
    <>
      <StyledTracksTable>
        <TracksTableHead type={source.type} />
        <TracksTableBody tracks={tracks} source={source} />
      </StyledTracksTable>
    </>
  );
};

export default TracksTable;
