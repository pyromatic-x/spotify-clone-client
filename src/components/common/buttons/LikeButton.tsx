import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLike } from '../../../store/reducers/playerSlice';

const LikeButton = memo(function LikeButton({ id }: { id: string }) {
  const dispatch = useDispatch();

  const liked = useSelector(
    // @ts-expect-error err
    (state) => state.player.playlist.find((t) => t.id === id)?.liked,
  );

  return (
    <Tooltip title={liked ? 'Remove from Your Library' : 'Add to Your Library'}>
      <IconButton
        onClick={() => dispatch(handleLike(id))}
        sx={{
          minWidth: 'max-content',
          '&:hover': {
            backgroundColor: 'transparent',
            '&:not(.liked) svg path': {
              fill: 'white',
            },
          },
        }}
        className={liked ? 'liked' : ''}
      >
        {liked ? (
          <Favorite sx={{ fontSize: '20px' }} color="green" />
        ) : (
          <FavoriteBorder sx={{ fontSize: '20px' }} color="secondary" />
        )}
      </IconButton>
    </Tooltip>
  );
});
export default LikeButton;
