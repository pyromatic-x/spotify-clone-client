import { Avatar, Grid, Typography } from '@mui/material';
import PlayButton from '../../common/buttons/PlayButton';
import { TopResultAvatarContainer, TopResultContainer } from './styled';
import { IBrowseTopResult } from '../../../api/types/browse';
import { capitalizeFirstLetter } from '../../../utils/strings';

const TopResult = ({ name, type, image }: IBrowseTopResult) => (
  <Grid item lg={4} md={12} gridArea="top" width="max-content">
    <Typography fontWeight="bold" variant="h6" color="white" mb={2}>
      Top Result
    </Typography>
    <TopResultContainer>
      <TopResultAvatarContainer elevation={3}>
        <Avatar variant="circular" src={image} alt={name} />
      </TopResultAvatarContainer>
      <Typography fontWeight="bold" fontSize="1.6rem">
        {name}
      </Typography>
      <Typography color="secondary">{capitalizeFirstLetter(type)}</Typography>
      <PlayButton
        className={'top-result-play-button'}
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          transition: '0.3s ease',
        }}
      />
    </TopResultContainer>
  </Grid>
);

export default TopResult;
