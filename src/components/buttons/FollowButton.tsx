import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { API } from '../../api';
import { useUnit } from 'effector-react';
import { $socket } from '../../auth/effect';
import { LibraryAddPayload } from '../../api/dto/library';
import { LibraryUpdateEventResponse } from '../../api/events';

type TProps = {
  source: LibraryAddPayload;
  variant: 'save' | 'follow';
};

const SaveButton = ({ source, variant }: TProps) => {
  const { target, type } = source;

  const socket = useUnit($socket);

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkIsSaved = async () => {
      const { data } = await API.library.check(target);
      setIsSaved(data);
    };

    checkIsSaved();
  }, []);

  useEffect(() => {
    const handleEvent = (data: LibraryUpdateEventResponse) => {
      if (data.target === target) setIsSaved(data.status === 'added');
    };

    if (socket) {
      socket.on('library-updated', handleEvent);
    }

    return () => {
      socket?.removeListener('library-updated');
    };
  }, [socket]);

  const handleOnClick = () => {
    API.library[isSaved ? 'remove' : 'add']({ target, type });
    setIsSaved(!isSaved);
  };

  return variant === 'follow' ? (
    <Button variant="outlined" color="secondary" onClick={handleOnClick} disableRipple>
      {isSaved ? 'Unfollow' : 'Follow'}
    </Button>
  ) : (
    <>TODO</>
  );
};
export default SaveButton;
