import { Box, Grid, Link } from '@mui/material';
import { StyledTrack } from './styled';
import PlayButton from '../../buttons/PlayButton';
import { TrackDto } from '../../../api/dto/track';
import { PlayDtoPayload } from '../../../api/dto/play';

type TTrack = {
  index: number;
  target: string;
  active?: boolean;
  _collection: PlayDtoPayload['type'];
} & TrackDto;

const QueueTrack = ({ name, album, author, index, active, target, _collection }: TTrack) => (
  <StyledTrack>
    <Grid container alignItems="center" width="max-content" height="100%">
      <Box height="100%" position="relative" mr="10px">
        <PlayButton simple source={{ _id: target, type: _collection, index }} title={`Play ${name}`} />
        <Box component="img" src={album.cover + '?w=96&h=96'} />
      </Box>
      <Grid container flexDirection="column" justifyContent="center" width="max-content">
        <Link
          fontSize="0.9rem"
          fontWeight="bold"
          truncate={1}
          maxWidth="260px"
          color={active ? 'primary.main' : 'common.white'}
        >
          {name}
        </Link>
        <Link color="secondary" fontSize="0.85rem" truncate={1}>
          {author.name}
        </Link>
      </Grid>
    </Grid>
  </StyledTrack>
);

export default QueueTrack;
