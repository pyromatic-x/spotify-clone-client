import { Grid, IconButton, Tooltip } from '@mui/material';
import PlayButton from '../../buttons/PlayButton';
import { Shuffle as ShuffleIcon, MoreHoriz as OptionsIcon } from '@mui/icons-material';
import SaveButton from '../../buttons/SaveButton';
import { CollectionEnums } from '../../../api/dto';

const UnitPageArtistControls = ({ _id }: { _id: string }) => {
  const iconSx = { fontSize: '2.3rem' };
  const type = 'artist' as Extract<keyof typeof CollectionEnums, 'artist'>;

  return (
    <Grid container alignItems="center" justifyContent="space-between" my="30px">
      <Grid container alignItems="center" justifyContent="space-between" width="max-content" gap="28px">
        <PlayButton title="" source={{ type, _id }} size={58} />
        <Tooltip title="Shuffle">
          <IconButton>
            <ShuffleIcon sx={iconSx} />
          </IconButton>
        </Tooltip>
        <SaveButton source={{ type, target: _id }} variant="follow" />
        <Tooltip title="More options">
          <IconButton>
            <OptionsIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default UnitPageArtistControls;
