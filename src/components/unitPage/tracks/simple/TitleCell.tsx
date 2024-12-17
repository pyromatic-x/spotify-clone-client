import { Box, Grid, TableCell, Typography } from '@mui/material';
import { ExplicitIcon } from '../styled';
import { TrackDto } from '../../../../api/dto/track';

type TProps = { playing: boolean } & TrackDto;

const TitleCell = ({ name, explicit, playing, album }: TProps) => (
  <TableCell align="left">
    <Grid container alignItems="center" gap="8px" wrap="nowrap">
      <Box component="img" src={album.cover + '?w=80&h=80'} width="40px" height="40px" borderRadius="4px" />
      <Grid container flexDirection="column" wrap="nowrap">
        <Typography color={playing ? 'primary' : 'white'}>{name}</Typography>
        <Grid container gap="5px">
          {explicit && <ExplicitIcon />}
        </Grid>
      </Grid>
    </Grid>
  </TableCell>
);

export default TitleCell;
