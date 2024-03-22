import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { memo } from 'react';

const LikeButton = memo(function LikeButton() {
  const liked = true;

  return (
    <Tooltip title={liked ? 'Remove from Your Library' : 'Add to Your Library'}>
      <IconButton
        onClick={() => console.log('like')}
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
