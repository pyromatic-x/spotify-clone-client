import { Box, Grid, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import { $queue, $queueSource, $shuffle } from '../audiobar/effect';
import List from './list';

const QueueList = () => {
  const queue = useUnit($queue);
  const source = useUnit($queueSource);
  const shuffle = useUnit($shuffle);

  const current = queue.find((t) => t._current);
  const currentIndex = queue.findIndex((t) => t._current);
  const next = queue.slice(shuffle === 'SIMPLE' ? 0 : currentIndex + 1);

  return (
    <Grid container flexDirection="column" gap={2}>
      {!!current && (
        <Box>
          <Typography pl="8px" fontWeight="bold">
            Now Playing
          </Typography>
          <List tracks={[current]} />
        </Box>
      )}
      <Box>
        <Typography pl="8px" fontWeight="bold">
          Next from: {source.title}
        </Typography>
        <List tracks={next} draggable />
      </Box>
    </Grid>
  );
};

export default QueueList;
