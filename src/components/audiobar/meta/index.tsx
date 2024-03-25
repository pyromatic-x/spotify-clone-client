import { Grid } from '@mui/material';
import { useUnit } from 'effector-react';
import { $queue } from '../effect';
import { Authors, Cover, Name } from './styled';

const Meta = () => {
  const queue = useUnit($queue);
  const track = queue.find((t) => t._current);

  // TODO: add placeholders when there's no current track

  return (
    <Grid container alignItems="center" columnGap="1rem" width="auto" flexWrap="nowrap">
      <Cover alt={track?.name} src={track?.cover} />
      <Grid>
        <Name to="">{track?.name}</Name>
        <Authors to="">{(track?.authors || []).slice(0, 2).join(', ')}</Authors>
      </Grid>
    </Grid>
  );
};

export default Meta;
