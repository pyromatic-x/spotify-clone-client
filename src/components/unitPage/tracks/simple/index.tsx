import { TableBody, TableCell, Typography } from '@mui/material';
import { StyledTracksTable } from '../styled';
import { TrackDto } from '../../../../api/dto/track';
import { PlayDtoPayload } from '../../../../api/dto/play';
import { TableRow } from '@mui/material';
import { Box } from '@mui/material';
import PlayingAnimation from '../PlayingAnimation';
import PlayButton from '../../../buttons/PlayButton';
import { $queue } from '../../../audiobar/effect';
import { useUnit } from 'effector-react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { toNumberWithDigits } from '../../../../utils/number';
import { formatDuration } from '../../../../utils/time';
import TitleCell from './TitleCell';
import SaveTrackButton from '../../../buttons/save/SaveTrackButton';

type TProps = {
  tracks: Array<TrackDto>;
  source: PlayDtoPayload;
};

const TracksTableSimple = ({ tracks, source }: TProps) => {
  const queue = useUnit($queue);
  const current = queue ? queue.tracks[queue.current]._id : null;

  const { playing } = useGlobalAudioPlayer();

  return (
    <StyledTracksTable sx={{ maxWidth: '1250px' }}>
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
            <TitleCell {...track} playing={track._id === current} />
            <TableCell align="left">{toNumberWithDigits(track.plays)}</TableCell>
            <TableCell align="right">
              <SaveTrackButton id={track._id} added={track.inLibrary} showWhenSaved />
            </TableCell>
            <TableCell align="left">{formatDuration(track.duration)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTracksTable>
  );
};

export default TracksTableSimple;
