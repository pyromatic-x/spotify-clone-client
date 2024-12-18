import { Box, Grid, Typography } from '@mui/material';
import { ArtistPageDto } from '../../api/dto/artist';
import { toNumberWithDigits } from '../../utils/number';

const ArtistPageAbout = ({ monthly, description, image }: ArtistPageDto['about']) => {
  return (
    <>
      <Typography fontSize="1.5rem" fontWeight="bold">
        About
      </Typography>
      <Grid
        maxWidth="900px"
        maxHeight="570px"
        container
        alignItems="flex-end"
        position="relative"
        sx={{
          aspectRatio: '1.57',
          transition: '0.3s ease',
          ':hover': {
            transform: 'scale(1.012)',
          },
        }}
        padding="30px"
      >
        <Box
          sx={{
            backgroundImage: `url(${image + '?w=900&h=570'})`,
            backgroundPosition: 'center',
            aspectRatio: '1.57',
            filter: 'brightness(0.35)',
          }}
          borderRadius="8px"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
        />
        <Box position="relative" zIndex={1}>
          <Typography fontWeight="bold" mb={2} fontSize="1.1rem">
            {toNumberWithDigits(monthly)} monthly listeners
          </Typography>
          {description && (
            <Typography truncate={3} maxWidth="75%" fontWeight="bold">
              {description}
            </Typography>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default ArtistPageAbout;
