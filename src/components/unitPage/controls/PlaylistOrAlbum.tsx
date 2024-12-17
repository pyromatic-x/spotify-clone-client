import { Grid, IconButton, Tooltip } from '@mui/material';
import PlayButton from '../../buttons/PlayButton';
import {
  Shuffle as ShuffleIcon,
  ArrowCircleDown as DownloadIcon,
  MoreHoriz as OptionsIcon,
} from '@mui/icons-material';
import { CollectionEnums } from '../../../api/dto';

type UnitPagePlaylistAlbumControlsProps = {
  _id: string;
  type: Extract<keyof typeof CollectionEnums, 'playlist' | 'album'>;
};

const UnitPagePlaylistAlbumControls = ({ _id, type }: UnitPagePlaylistAlbumControlsProps) => {
  const iconSx = { fontSize: '2.3rem' };
  const source = { type, _id };

  return (
    <Grid container alignItems="center" justifyContent="space-between" my="30px">
      <Grid container alignItems="center" justifyContent="space-between" width="max-content" gap="28px">
        <PlayButton title="" source={source} size={58} />
        <Tooltip title="Shuffle">
          <IconButton>
            <ShuffleIcon sx={iconSx} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Download">
          <IconButton>
            <DownloadIcon sx={iconSx} />
          </IconButton>
        </Tooltip>
        <Tooltip title="More options">
          <IconButton>
            <OptionsIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default UnitPagePlaylistAlbumControls;
