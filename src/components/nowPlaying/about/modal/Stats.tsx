import { Box, Grid, Typography } from '@mui/material';
import { DialogStyledSocialLink } from './styled';
import { useUnit } from 'effector-react';
import { $nowPlaying } from '../../effect';
import { numberWithDigits } from '../../../../utils/strings';
import { FacebookRounded, Instagram, Twitter } from '@mui/icons-material';

const Stats = () => {
  const { artist } = useUnit($nowPlaying);

  return (
    <Grid container flexDirection="column">
      <Box mb={3.7}>
        <Typography fontWeight="bold" fontSize="1.7rem">
          {numberWithDigits(artist.followers)}
        </Typography>
        <Typography color="secondary" fontSize="0.9rem">
          Followers
        </Typography>
      </Box>
      <Box mb={3.7}>
        <Typography fontWeight="bold" fontSize="1.7rem">
          {numberWithDigits(artist.listeners.monthly)}
        </Typography>
        <Typography color="secondary" fontSize="0.9rem">
          Monthly Listeners
        </Typography>
      </Box>
      <Grid container flexDirection="column" gap={1.3} mb={4.5}>
        {artist.listeners.world.map((t) => (
          <Box key={t.city + '_' + t.county}>
            <Typography fontSize="0.9rem" fontWeight="bold">
              {t.city}, {t.county}
            </Typography>
            <Typography color="secondary" fontSize="0.8rem">
              {numberWithDigits(t.value)} listeners
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid container flexDirection="column" gap={1.3}>
        <DialogStyledSocialLink to="">
          <>
            <FacebookRounded />
            <Typography>Facebook</Typography>
          </>
        </DialogStyledSocialLink>
        <DialogStyledSocialLink to="">
          <>
            <Instagram />
            <Typography>Instagram</Typography>
          </>
        </DialogStyledSocialLink>
        <DialogStyledSocialLink to="">
          <>
            <Twitter />
            <Typography>Twitter</Typography>
          </>
        </DialogStyledSocialLink>
      </Grid>
    </Grid>
  );
};

export default Stats;
