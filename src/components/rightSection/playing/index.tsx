import { Box, Button, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import { RightSectionHeaderContainer } from '../styled';
import { setRightSectionComponent } from '../effect';
import { Close as CloseIcon } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import { $queue } from '../../audiobar/effect';
import { useEffect } from 'react';
import { $nowPlaying, getNowPlayingDetails, resetNowPlaying, TNowPlaying } from './effect';
import { Card, CardImage, Cover, CardContent } from './styled';
import { useNavigate } from 'react-router-dom';
import { stringToNumberWithDigits } from '../../../utils/number';
import QueueTrack from '../queue/Track';
import FollowButton from '../../buttons/FollowButton';

const RightSectionPlaying = ({ showHeaderShadow }: { showHeaderShadow: boolean }) => {
  const navigate = useNavigate();

  const details = useUnit($nowPlaying);
  const queue = useUnit($queue)!;

  const title = queue._collection === 'album' ? details?.artist?.name : queue.name;

  useEffect(() => {
    getNowPlayingDetails(queue?.tracks[queue?.current].author._id);
  }, [queue.current]);

  useEffect(() => resetNowPlaying(), []);

  if (!details) return <>loading</>;

  const { album, track, artist, next } = details;

  return (
    <>
      <RightSectionHeaderContainer showHeaderShadow={showHeaderShadow} mb={2}>
        <Link fontWeight="bold" ml="8px">
          {title}
        </Link>
        <Tooltip title="Close">
          <IconButton variant="fill-on-hover" onClick={() => setRightSectionComponent(null)}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </RightSectionHeaderContainer>
      <Box ml="8px">
        <Cover src={album.cover + '?w=752&h=752&q=70'} onClick={() => navigate('')} />
        <Heading name={track.name} author={artist} />
        <Grid container flexDirection="column" gap="14px">
          <Artist artist={artist} />
          <Credits artist={artist} />
          {!!next && <Next track={next} />}
        </Grid>
      </Box>
    </>
  );
};

const Heading = ({ name, author }: { name: string; author: TNowPlaying['artist'] }) => (
  <Grid container justifyContent="space-between" alignItems="center" width="max-content" mb={2.5}>
    <Grid container flexDirection="column">
      <Link fontWeight="bold" fontSize="1.5">
        {name}
      </Link>
      <Link color="secondary">{author?.name}</Link>
    </Grid>
  </Grid>
);
const Artist = ({ artist }: { artist: TNowPlaying['artist'] }) => (
  <Card sx={{ cursor: 'pointer' }}>
    <Typography position="absolute" top={22} left={16} fontWeight="bold">
      About the artist
    </Typography>
    <CardImage src={artist.about?.image + '?w=752&h=500&q=70'} />
    <CardContent>
      <Typography fontWeight="bold" mb={1}>
        {artist.name}
      </Typography>
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        <Typography color="secondary">
          {stringToNumberWithDigits(artist.stats.listeners.monthly)} monthly listeners
        </Typography>
        <FollowButton _collection="artist" target={artist._id} />
      </Grid>
      <Typography truncate={3} color="secondary">
        {artist.about?.bio}
      </Typography>
    </CardContent>
  </Card>
);
const Credits = ({ artist }: { artist: TNowPlaying['artist'] }) => (
  <Card>
    <CardContent>
      <Typography fontWeight="bold" mb={1}>
        Credits
      </Typography>

      <Grid container alignItems="center" justifyContent="space-between">
        <Box>
          <Typography>{artist.name}</Typography>
          <Typography color="secondary">Main Artist</Typography>
        </Box>
        <FollowButton _collection="artist" target={artist._id} />
      </Grid>
    </CardContent>
  </Card>
);
const Next = ({ track }: { track: TNowPlaying['next'] }) => (
  <Card>
    <CardContent>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold" mb={1}>
          Next in queue
        </Typography>
        <Button color="secondary" variant="text" onClick={() => setRightSectionComponent('queue')}>
          Open queue
        </Button>
      </Grid>

      <QueueTrack {...track!} />
    </CardContent>
  </Card>
);

export default RightSectionPlaying;
