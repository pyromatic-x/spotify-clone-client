import { Box, Button, Grid, Popover, Radio, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { API } from '../../../api';
import { HandleTrackInPlaylistPaylodDto, PlaylistMinifiedByTrackDto } from '../../../api/dto/playlist';
import { SaveTrackPopoverButtons, SaveTrackPopoverPlaylist } from './styled';

type TProps = {
  id: string;
  isOpen: boolean;
  hide: () => void;
  anchor: HTMLButtonElement | null;
};

const SaveTrackPopover = ({ id, isOpen, anchor, hide }: TProps) => {
  const [playlists, setPlaylists] = useState<Array<PlaylistMinifiedByTrackDto> | null>(null);
  const [playlistsChanged, setPlaylistsChanged] = useState<Array<PlaylistMinifiedByTrackDto> | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const getPlaylists = async () => {
        const { data } = await API.playlists.own(id);
        setPlaylists(data);
        setPlaylistsChanged(data);
      };

      getPlaylists();
    }
  }, [isOpen]);

  const handleOnClick = (id: string) => {
    if (playlistsChanged?.length) {
      setPlaylistsChanged(
        playlistsChanged?.map((p) => ({
          ...p,
          trackInPlaylist: p._id === id ? !p.trackInPlaylist : p.trackInPlaylist,
        })),
      );

      setHasChanges(comparePlaylists(playlists, playlistsChanged));
    }
  };

  const handleOnSave = () => {
    if (hasChanges && playlistsChanged) {
      API.playlists.handleTrack({ trackId: id, playlists: preparePayloadPlaylists(playlistsChanged) });
      hide();
    }
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      slotProps={{
        paper: {
          id: 'handle-track-in-playlists-popover',
        },
      }}
    >
      <Grid
        display="grid"
        gridTemplateRows="auto 1fr auto"
        minHeight="280px"
        maxHeight="480px"
        width="290px"
        padding="8px 8px 0 8px"
      >
        <Typography fontWeight="bold" fontSize="0.75rem" ml={0.5} color="secondary">
          Add to playlist
        </Typography>

        <Box mt={2} height="100%" overflow="scroll">
          {!!playlistsChanged &&
            playlistsChanged.map((p) => (
              <SaveTrackPopoverPlaylist onClick={() => handleOnClick(p._id)} key={p._id}>
                <Grid container alignItems="center" gap={1} width="max-content" wrap="nowrap">
                  <Box component="img" src={p.cover} />
                  <Typography>{p.name}</Typography>
                </Grid>
                <Radio checked={p.trackInPlaylist} disableRipple onClick={() => handleOnClick(p._id)} />
              </SaveTrackPopoverPlaylist>
            ))}
        </Box>

        <SaveTrackPopoverButtons>
          <Button variant="text" onClick={hide}>
            Cancel
          </Button>
          {hasChanges && (
            <Button variant="contained" onClick={handleOnSave}>
              Done
            </Button>
          )}
        </SaveTrackPopoverButtons>
      </Grid>
    </Popover>
  );
};

function comparePlaylists(
  arr1: Array<PlaylistMinifiedByTrackDto> | null,
  arr2: Array<PlaylistMinifiedByTrackDto> | null,
) {
  if (!arr1 || !arr2) return false;

  const first = arr1.map((t) => t.trackInPlaylist ?? false);
  const second = arr2.map((t) => t.trackInPlaylist ?? false);

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}

function preparePayloadPlaylists(
  playlists: Array<PlaylistMinifiedByTrackDto>,
): HandleTrackInPlaylistPaylodDto['playlists'] {
  return playlists.map((t) => ({ id: t._id, status: t.trackInPlaylist ? 'add' : 'remove' }));
}

export default memo(SaveTrackPopover);
