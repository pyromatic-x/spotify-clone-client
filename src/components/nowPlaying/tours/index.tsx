import { Box, Grid, Typography } from '@mui/material';
import { Container } from '../styled';
import { useUnit } from 'effector-react';
import { $nowPlaying } from '../effect';
import DateIcon from './DateIcon';
import { TextTruncated } from '../../common/text/styled';
import { getDateValues } from '../../../utils/date';

const Tours = () => {
  const { artist } = useUnit($nowPlaying);

  if (!artist?.tours) return null;

  return (
    <Container>
      <Typography fontWeight="bold" mb={1.5}>
        Tours
      </Typography>
      <Grid container flexDirection="column" gap={1.5}>
        {artist.tours.map((t) => {
          const { month, day, weekday, time } = getDateValues(t.date);

          return (
            <Grid container alignItems="center" flexWrap="nowrap" key={t.date}>
              <DateIcon month={month} day={day} />
              <Box ml={2}>
                <Typography lineHeight="1.4" fontSize="0.9rem">
                  {t.city}
                </Typography>
                <Typography lineHeight="1.4" fontSize="0.8rem">
                  {artist.name}
                </Typography>
                <TextTruncated lineHeight="1.4" fontSize="0.9rem" color="secondary" lines={1}>
                  {weekday} {time} {t.place}
                </TextTruncated>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Tours;
