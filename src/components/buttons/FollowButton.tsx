import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { API } from '../../api';
import { FollowPayload } from '../../api/dto/follow';
import { useUnit } from 'effector-react';
import { $socket } from '../../ws/effect';

const FollowButton = (props: FollowPayload) => {
  const socket = useUnit($socket);

  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const isFollowing = async () => {
      const { data } = await API.follow.isFollowing(props.target);
      setIsFollowing(data);
    };

    isFollowing();
  }, []);

  useEffect(() => {
    const handleEvent = (type: 'followed' | 'unfollowed', { target, _collection }: FollowPayload) => {
      if (target === props.target && _collection === props._collection) {
        setIsFollowing(type === 'followed');
      }
    };

    if (socket) {
      socket.on('followed', handleEvent.bind(null, 'followed'));
      socket.on('unfollowed', handleEvent.bind(null, 'unfollowed'));
    }

    return () => {
      socket?.removeListener('followed');
      socket?.removeListener('unfollowed');
    };
  }, [socket]);

  const handleOnClick = async () => {
    if (isFollowing) {
      await API.follow.unfollow(props);
      setIsFollowing(false);
    } else {
      await API.follow.follow(props);
      setIsFollowing(true);
    }
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleOnClick} disableRipple>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};
export default FollowButton;
