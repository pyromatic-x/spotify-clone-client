import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import { $nowPlaying } from '../effect';
import { CardMediaShadow, StyledCardContent, StyledCardMedia } from './styled';
import Link from '../../common/text/Link';
import { numberWithDigits } from '../../../utils/strings';
import { TextTruncated } from '../../common/text/styled';
import { useState } from 'react';
import AboutModal from './modal';

const AboutCard = () => {
  const { artist } = useUnit($nowPlaying);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Card elevation={0} sx={{ cursor: 'pointer' }} onClick={handleOpen}>
        <StyledCardMedia image={artist.picture}>
          <CardMediaShadow>
            <Typography fontWeight="bold" fontSize="0.9rem">
              About the artist
            </Typography>
          </CardMediaShadow>
        </StyledCardMedia>
        <StyledCardContent>
          <Link to="" fontWeight="bold" lineHeight="1.7">
            {artist.name}
          </Link>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography color="secondary" fontSize="inherit">
              {numberWithDigits(artist.listeners.monthly)} monthly listeners
            </Typography>
            <Button variant="outlined" disableRipple>
              Follow
            </Button>
          </Grid>
          <TextTruncated lines={3} color="secondary" fontSize="0.9rem">
            {artist.about.description}
          </TextTruncated>
        </StyledCardContent>
      </Card>
      <AboutModal open={open} onClose={handleClose} />
    </Box>
  );
};

export default AboutCard;
