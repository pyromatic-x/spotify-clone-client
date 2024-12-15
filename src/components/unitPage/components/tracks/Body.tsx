import { Box, Grid, Link, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { TrackDto } from '../../../../api/dto/track';

import { formatDuration } from '../../../../utils/time';
import dayjs from 'dayjs';
import { Link as RouterLink } from 'react-router-dom';
import PlayButton from '../../../buttons/PlayButton';
import { PlayDtoPayload } from '../../../../api/dto/play';
import { useUnit } from 'effector-react';
import { $queue } from '../../../audiobar/effect';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { toNumberWithDigits } from '../../../../utils/number';
import { ExplicitIcon, StyledPlayingAnimation } from './styled';

type TProps = {
  tracks: Array<TrackDto>;
  source: PlayDtoPayload;
};

const TracksTableBody = ({ tracks, source }: TProps) => {
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
          <TitleCell
            name={track.name}
            explicit={track.explicit}
            playing={track._id === current}
            author={track.author}
            album={track.album}
            type={source.type}
          />
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
          <TableCell align="left">{formatDuration(track.duration)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

type TTitleProps = {
  name: string;
  explicit: boolean;
  playing: boolean;
  author: TrackDto['author'];
  album: TrackDto['album'];
  type: PlayDtoPayload['type'];
};

const TitleCell = ({ name, explicit, playing, author, type, album }: TTitleProps) => (
  <TableCell align="left">
    <Grid container alignItems="center" gap="8px" wrap="nowrap">
      {type !== 'album' && (
        <Box component="img" src={album.cover + '?w=80&h=80'} width="40px" height="40px" borderRadius="4px" />
      )}
      <Grid container flexDirection="column" wrap="nowrap">
        <Typography color={playing ? 'primary' : 'white'}>{name}</Typography>
        <Grid container gap="5px">
          {explicit && <ExplicitIcon />}
          {type !== 'artist' && (
            <Link component={RouterLink} to={`/artist/${author._id}`} color="secondary" fontSize="0.85rem">
              {author.name}
            </Link>
          )}
        </Grid>
      </Grid>
    </Grid>
  </TableCell>
);

const PlayingAnimation = () => (
  <Grid container justifyContent="center">
    <StyledPlayingAnimation>
      <div />
      <div />
      <div />
      <div />
    </StyledPlayingAnimation>
  </Grid>
);

export default TracksTableBody;
