import { Box, Grid, Link } from '@mui/material';
import { Cover } from './styled';
import { useUnit } from 'effector-react';
import { $queue } from '../effect';

const AudiobarInfo = () => {
  const queue = useUnit($queue);

  const current = queue?.tracks.find((t, i) => i === queue?.current);

  if (!queue) return <Box width="100%" />;

  return (
    <Grid container gap={1} wrap="nowrap">
      {!queue ? <Box width="60px" height="60px" /> : <Cover src={current?.album.cover + '?w=120&h=120'} />}
      <Grid container flexDirection="column" justifyContent="center" width="max-content">
        <Link fontSize="0.95rem" fontWeight="bold" truncate={1} maxWidth="20vw">
          {current?.name}
        </Link>
        <Link color="secondary" fontSize="0.9rem">
          {current?.author?.name}
        </Link>
      </Grid>
    </Grid>
  );
};

export default AudiobarInfo;
