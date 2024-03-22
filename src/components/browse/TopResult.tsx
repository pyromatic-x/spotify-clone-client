import { Avatar, Chip, Grid, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '../../utils/strings';
import PlayButton from '../common/buttons/PlayButton';
import { TopResultContainer } from './styled';

const TopResult = ({ item }: { item: any }) => (
  <Grid item lg={4} md={12}>
    <Typography fontWeight="bold" variant="h6" color="white" mb={2}>
      Top Result
    </Typography>
    <TopResultContainer>
      <Avatar
        variant="circular"
        sx={{
          width: '90px',
          height: '90px',
          marginBottom: '1rem',
          boxShadow: '0px 0px 14px 10px rgba(0, 0, 0, 0.4)',
        }}
        src={item.image}
        alt={item.title || item.name}
      />
      <Typography
        fontWeight="bold"
        fontSize="1.1rem"
        mb={1}
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          maxWidth: '15vw',
        }}
      >
        {item.title || item.name}
      </Typography>
      {item.type && (
        <Chip label={capitalizeFirstLetter(item.type)} sx={{ backgroundColor: 'secondary.dark' }} />
      )}
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
