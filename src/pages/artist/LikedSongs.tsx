import { Box, Grid, Typography } from '@mui/material';
import { ArtistPageDto } from '../../api/dto/artist';
import { LikedSongsIconContainer, LikedSongsImageContainer } from './styled';
import { Favorite as HeartIcon } from '@mui/icons-material/';

const ArtistPageLikedSongs = ({ likedCount, avatar, name }: ArtistPageDto['meta']) => {
  return (
    likedCount > 0 && (
      <Box>
        <Typography fontSize="1.5rem" fontWeight="bold" mb={2}>
          Liked Songs
        </Typography>
        <Grid container alignItems="center" flexWrap="nowrap">
          <LikedSongsImageContainer>
            <Box src={avatar + '?w=100&=100'} component="img" borderRadius="50%" />
            <LikedSongsIconContainer>
              <HeartIcon />
            </LikedSongsIconContainer>
          </LikedSongsImageContainer>
          <Box ml={2}>
            <Typography fontWeight="bold" noWrap>
              You've liked {likedCount} song{likedCount > 1 && 's'}
            </Typography>
            <Typography color="secondary" fontSize="0.9rem" noWrap>
              By {name}
            </Typography>
          </Box>
        </Grid>
      </Box>
    )
  );
};

export default ArtistPageLikedSongs;
