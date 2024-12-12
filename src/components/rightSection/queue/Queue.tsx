import { useUnit } from 'effector-react';
import { $queue } from '../../audiobar/effect';
import { Box, Link, Typography } from '@mui/material';
import { TrackDto } from '../../../api/dto/track';
import { TQueue } from '../../audiobar/types';
import QueueTrack from './Track';

const RightSectionQueue = () => {
  const queue = useUnit($queue) as TQueue;

  const { current, target, _collection, tracks } = queue;

  const currentTrack = queue?.tracks[queue.current] as TrackDto;
  const tracksLength = tracks.length;

  const nextTracks = queue?.tracks.slice(current + 1, tracksLength);

  return (
    <Box>
      <Box mb={3}>
        <Typography pl="8px" fontWeight="bold" fontSize="0.9rem">
          Now playing
        </Typography>
        <QueueTrack
          {...currentTrack}
          index={current}
          target={target}
          _collection={_collection}
          active={true}
        />
      </Box>
      {!!nextTracks.length && (
        <>
          <Typography pl="8px" fontWeight="bold" fontSize="0.9rem">
            Next from: <Link>{queue?.name}</Link>
          </Typography>
          <Box>
            {nextTracks.map((track, index) => (
              <QueueTrack
                {...track}
                key={track._id}
                index={current + index + 1}
                target={queue.target}
                _collection={queue._collection}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default RightSectionQueue;
