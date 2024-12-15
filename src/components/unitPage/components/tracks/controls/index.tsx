import { Grid, IconButton, Tooltip } from '@mui/material';

import {
  ArrowCircleDown as DownloadIcon,
  Shuffle as ShuffleIcon,
  MoreHoriz as OptionsIcon,
} from '@mui/icons-material/';
import PlayButton from '../../../../buttons/PlayButton';
import { PlayDtoPayload } from '../../../../../api/dto/play';

type TProps = {
  source: PlayDtoPayload;
};

const TracksTableControls = ({ source }: TProps) => {
  const iconSx = { fontSize: '2.3rem' };

  return (
    <Grid container alignItems="center" justifyContent="space-between" mb="30px">
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

export default TracksTableControls;
