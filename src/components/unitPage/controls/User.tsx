import { Grid, IconButton, Tooltip } from '@mui/material';
import { MoreHoriz as OptionsIcon } from '@mui/icons-material';
import SaveButton from '../../buttons/SaveButton';
import { CollectionEnums } from '../../../api/dto';

const UnitPageUserControls = ({ _id }: { _id: string }) => {
  const type = 'user' as Extract<keyof typeof CollectionEnums, 'user'>;

  return (
    <Grid container alignItems="center" justifyContent="space-between" mb="30px">
      <Grid container alignItems="center" justifyContent="space-between" width="max-content" gap="28px">
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

export default UnitPageUserControls;
