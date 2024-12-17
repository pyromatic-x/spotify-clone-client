import { Box, Grid, Link, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { TrackDto } from '../../../api/dto/track';

import { formatDuration } from '../../../utils/time';
import dayjs from 'dayjs';
import { Link as RouterLink } from 'react-router-dom';
import PlayButton from '../../buttons/PlayButton';
import { useUnit } from 'effector-react';
import { $queue } from '../../audiobar/effect';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { toNumberWithDigits } from '../../../utils/number';
import { ExplicitIcon } from './styled';
import { TracksTableProps } from './types';
import PlayingAnimation from './PlayingAnimation';
import SaveTrackButton from '../../buttons/save/SaveTrackButton';

const TracksTableBody = ({ tracks, source }: TracksTableProps) => {
  const queue = useUnit($queue);
  const current = queue ? queue.tracks[queue.current]._id : null;

  const { playing } = useGlobalAudioPlayer();

  return (
    <TableBody>
      {tracks.map((track, index) => (
        <TableRow key={track._id}>
          <TableCell align="center">
            <Box className="tracks-table-index">
              {playing && current === track._id ? (
                <PlayingAnimation />
              ) : (
                <Typography color={current === track._id ? 'primary' : 'secondary'}>{index + 1}</Typography>
              )}
            </Box>

            <PlayButton
              title={`${track.name} by ${track.author.name}`}
              source={{ ...source, index }}
              size={40}
              simple
            />
          </TableCell>
          <TitleCell playing={track._id === current} type={source.type} {...track} />
          {source.type === 'playlist' ? (
            <>
              <TableCell align="left">
                <Link component={RouterLink} to={`/album/${track.album._id}`}>
                  {track.album.name}
                </Link>
              </TableCell>
              <TableCell align="left">{dayjs(track.addedAt).format('MMM DD, YYYY')}</TableCell>
            </>
          ) : (
            <TableCell align="left">{toNumberWithDigits(track.plays)}</TableCell>
          )}
          <TableCell align="right">
            <SaveTrackButton
              id={track._id}
              added={track.inLibrary}
              showWhenSaved={queue?.name !== 'Liked Songs'}
            />
          </TableCell>
          <TableCell align="left">{formatDuration(track.duration)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

type TitleCellProps = {
  playing: boolean;
  type: TracksTableProps['source']['type'];
} & TrackDto;

const TitleCell = ({ name, explicit, playing, author, type, album }: TitleCellProps) => (
  <TableCell align="left">
    <Grid container alignItems="center" gap="8px" wrap="nowrap">
      {type !== 'album' && (
        <Box component="img" src={album.cover + '?w=80&h=80'} width="40px" height="40px" borderRadius="4px" />
      )}
      <Grid container flexDirection="column" wrap="nowrap">
        <Typography color={playing ? 'primary' : 'white'}>{name}</Typography>
        <Grid container gap="5px">
          {explicit && <ExplicitIcon />}
          <Link component={RouterLink} to={`/artist/${author._id}`} color="secondary" fontSize="0.85rem">
            {author.name}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </TableCell>
);

export default TracksTableBody;
