import { MoreHoriz } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTrackById, onPause, onPlay } from '../../../store/reducers/playerSlice';
import LikeButton from '../../common/buttons/LikeButton';
import { formatDuration } from '../../../utils/strings';
import { memo } from 'react';
import { AlbumLink, ListItemContainer } from './styled';
import Status from './Status';
import Track from './Track';

type IProps = {
  track: any;
  active: boolean;
  index: number;
  playing: boolean;
};

const QueueListItem = memo(function QueueListItem({ track, active, index, playing }: IProps) {
  const dispatch = useDispatch();

  const [hovering, setHovering] = useState(false);

  const changeTrack = () => dispatch(changeTrackById(track.id));
  const playTrack = () => dispatch(onPlay());
  const pauseTrack = () => dispatch(onPause());

  return (
    <ListItemContainer onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Status
        id={track.id}
        index={index}
        active={active}
        playing={playing}
        hovering={hovering}
        actions={{ play: playTrack, pause: pauseTrack, change: changeTrack }}
      />
      <Track cover={track.cover} name={track.name} authors={track.authors} active={active} />
      <AlbumLink underline="hover" color="secondary" className="queue-item-album">
        {track.album}
      </AlbumLink>
      <Box sx={{ opacity: track.liked || hovering ? 1 : 0 }}>
        <LikeButton id={track.id} />
      </Box>
      <Typography color="secondary" textAlign="center">
        {formatDuration(track.duration)}
      </Typography>
      <IconButton
        sx={{ padding: 0, width: '40px', height: '40px', opacity: '0' }}
        className="queue-item-menu-button"
      >
        <MoreHoriz />
      </IconButton>
    </ListItemContainer>
  );
});

export default QueueListItem;
