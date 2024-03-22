import { MoreHoriz } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import LikeButton from '../../common/buttons/LikeButton';
import { memo } from 'react';
import { AlbumLink, ListItemContainer } from './styled';
import Status from './Status';
import Track from './Track';
import { formatDuration } from '../../../utils/time';

type IProps = {
  track: any;
  active: boolean;
  index: number;
  playing: boolean;
};

const QueueListItem = memo(function QueueListItem({ track, active, index, playing }: IProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <ListItemContainer onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Status
        id={track.id}
        index={index}
        active={active}
        playing={playing}
        hovering={hovering}
        actions={{ play: () => {}, pause: () => {}, change: () => {} }}
      />
      <Track cover={track.cover} name={track.name} authors={track.authors} active={active} />
      <AlbumLink underline="hover" color="secondary" className="queue-item-album">
        {track.album}
      </AlbumLink>
      <Box sx={{ opacity: track.liked || hovering ? 1 : 0 }}>
        <LikeButton />
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
