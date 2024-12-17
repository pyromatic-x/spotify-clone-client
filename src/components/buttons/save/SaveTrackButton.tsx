import { ClickAwayListener, IconButton, Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { API } from '../../../api';
import { useUnit } from 'effector-react';
import { $socket } from '../../../auth/effect';

import { AddCircleOutline as SaveIcon, CheckCircle as SavedIcon } from '@mui/icons-material/';
import SaveTrackPopover from './SaveTrackPopover';
import { PlaylistUpdateEventResponse } from '../../../api/events';

type TProps = {
  id: string;
  added: boolean;
  showWhenSaved?: boolean;
};

const SaveTrackButton = ({ id, added, showWhenSaved }: TProps) => {
  const socket = useUnit($socket);

  const [isSaved, setIsSaved] = useState(added);
  const [isOpen, setIsOpen] = useState(false);

  const anchor = useRef<HTMLButtonElement>(null);

  const Icon = isSaved ? SavedIcon : SaveIcon;

  useEffect(() => {
    const handleEvent = (data: PlaylistUpdateEventResponse) => {
      if (data.track === id) setIsSaved(data.status === 'added');
    };

    if (socket) {
      socket.on('playlist-updated', handleEvent);
    }

    return () => {
      socket?.removeListener('playlist-updated');
    };
  }, [socket]);

  const handleOnClick = () => {
    if (!isSaved) {
      API.tracks.like({ id });
    } else setIsOpen(true);
  };

  const handleOnClickAway = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#handle-track-in-playlists-popover')) setIsOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleOnClickAway}>
        <Tooltip title={`Add to ${isSaved ? 'playlist' : 'Liked Songs'}`}>
          <IconButton
            variant="transparent"
            disableRipple
            onClick={handleOnClick}
            ref={anchor}
            className={`save-track-button`}
            sx={{ ...(showWhenSaved && isSaved && { opacity: '1 !important' }) }}
          >
            <Icon color={isSaved ? 'primary' : 'secondary'} sx={{ fontSize: '1.35rem' }} />
          </IconButton>
        </Tooltip>
      </ClickAwayListener>
      <SaveTrackPopover id={id} isOpen={isOpen} anchor={anchor.current} hide={() => setIsOpen(false)} />
    </>
  );
};
export default SaveTrackButton;
