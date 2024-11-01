import { useUnit } from 'effector-react';
import { $search } from '../../../pages/browse/effect';
import { Container } from './styled';
import { useState } from 'react';
import TopResult from './TopResult';
import { Box, Grid, Typography } from '@mui/material';
import Track from '../../common/cards/track';
import Section from '../../common/section';

const DEFAULT_TEMPLATE = `"top tracks""rest rest"`;

const Results = () => {
  const items = useUnit($search);

  const [template] = useState(DEFAULT_TEMPLATE);

  return (
    <Container template={template}>
      {items?.top && <TopResult {...items.top} />}
      {items?.tracks && (
        <Box>
          <Typography fontWeight="bold" variant="h6" color="white" mb={2}>
            Songs
          </Typography>
          <Box>
            {items.tracks.map((track) => (
              <Track key={track.id} {...track} />
            ))}
          </Box>
        </Box>
      )}
      <Grid container flexDirection="column" rowGap={5} gridArea="rest">
        {items?.featuring && <Section items={items.featuring} title="Featuring" />}
        {items?.artists && <Section items={items.artists} title="Artists" />}
        {items?.albums && <Section items={items.albums} title="Albums" />}
        {items?.playlists && <Section items={items.playlists} title="Playlists" />}
        {items?.users && <Section items={items.users} title="Users" />}
      </Grid>
    </Container>
  );
};

export default Results;
