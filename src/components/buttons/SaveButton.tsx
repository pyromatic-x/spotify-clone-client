import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { API } from '../../api';
import { useUnit } from 'effector-react';
import { $socket } from '../../auth/effect';
import { LibraryAddPayload } from '../../api/dto/library';
import { LibraryUpdateEventResponse } from '../../api/events';

const SaveButton = (props: LibraryAddPayload) => {
  const socket = useUnit($socket);

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkIsSaved = async () => {
      const { data } = await API.library.check(props.target);
      setIsSaved(data);
    };

    checkIsSaved();
  }, []);

  useEffect(() => {
    const handleEvent = ({ target, status }: LibraryUpdateEventResponse) => {
      if (target === props.target) setIsSaved(status === 'added');
    };

    if (socket) {
      socket.on('library-updated', handleEvent);
    }

    return () => {
      socket?.removeListener('library-updated');
    };
  }, [socket]);

  const handleOnClick = () => {
    API.library[isSaved ? 'remove' : 'add'](props);
    setIsSaved(!isSaved);
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleOnClick} disableRipple>
      {isSaved ? 'Unfollow' : 'Follow'}
    </Button>
  );
};
export default SaveButton;
