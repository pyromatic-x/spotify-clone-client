import { Grid } from '@mui/material';
import { useUnit } from 'effector-react';
import { $currentTrack } from '../effect';
import { Authors, Cover, Name } from './styled';

const Meta = () => {
  const track: any = useUnit($currentTrack);

  return (
    <Grid container alignItems="center" columnGap="1rem" width="auto" flexWrap="nowrap">
      <Cover alt={track.name} src={track.cover} />
      <Grid>
        <Name to="">{track.name}</Name>
        <Authors to="">{(track?.authors || []).slice(0, 2).join(', ')}</Authors>
      </Grid>
    </Grid>
  );
};

export default Meta;
