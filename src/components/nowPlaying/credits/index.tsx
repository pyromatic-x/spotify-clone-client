import { Box, Button, Grid, Typography } from '@mui/material';
import { Container } from '../styled';
import { useUnit } from 'effector-react';
import { $nowPlaying } from '../effect';
import { TextTruncated } from '../../common/text/styled';

const Credits = () => {
  const { track } = useUnit($nowPlaying);

  return (
    <Container>
      <Typography fontWeight="bold" mb={1.5}>
        Credits
      </Typography>
      <Grid container flexDirection="column" gap={1.5}>
        {track.credits.map((t) => (
          <Grid container justifyContent="space-between" alignItems="center" key={t.name} flexWrap="nowrap">
            <Box width="100%">
              <Typography fontSize="0.95rem">{t.name}</Typography>
              <TextTruncated fontSize="0.95rem" color="secondary" lines={1} maxWidth="95%">
                {t.roles.join(', ')}
              </TextTruncated>
            </Box>
            <Button variant="outlined" disableRipple sx={{ flexShrink: 0 }}>
              Follow
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Credits;
