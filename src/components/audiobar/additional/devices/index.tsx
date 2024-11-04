import { Computer, Devices as DevicesIcon, Launch, PowerSettingsNew, Wifi } from '@mui/icons-material';
import IconWithTooltip from '../Icon';
import { List, Typography } from '@mui/material';
import { useState } from 'react';
import { ContentRow, PopoverContent, RowText, StyledListItem, StyledPopover } from './styled';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { generateUUID } from '../../../../utils/strings';

const Devices = () => {
  const { playing } = useGlobalAudioPlayer();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? generateUUID() : undefined;

  return (
    <>
      <IconWithTooltip tooltip="Connect to a device" Icon={DevicesIcon} onClick={handleClick} />
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transitionDuration={0}
        slotProps={{
          root: {
            sx: { top: '-12px' },
          },
        }}
      >
        <PopoverContent>
          <ContentRow>
            {playing ? <></> : <Computer sx={{ fontSize: '2rem' }} color="green" />}
            <RowText>
              <Typography fontWeight="bold">Curent device</Typography>
              <Typography component="span">This computer</Typography>
            </RowText>
          </ContentRow>
          <Typography fontWeight="bold" fontSize="0.95rem">
            No other devices found
          </Typography>
          <ContentRow>
            <Wifi />
            <RowText>
              <Typography>Check your WiFi</Typography>
              <Typography component="span">Connect the devices you're using to the same WiFi.</Typography>
            </RowText>
          </ContentRow>
          <ContentRow>
            <DevicesIcon />
            <RowText>
              <Typography>Play from another device</Typography>
              <Typography component="span">It will automatically appear here.</Typography>
            </RowText>
          </ContentRow>
          <ContentRow>
            <PowerSettingsNew />
            <RowText>
              <Typography>Restart your speaker</Typography>
              <Typography component="span">Or follow setup instructions if it's a new device.</Typography>
            </RowText>
          </ContentRow>
          <List disablePadding>
            <StyledListItem>
              <Typography>Don't see your device?</Typography>
              <Launch></Launch>
            </StyledListItem>
            <StyledListItem>
              <Typography>What can I connect to?</Typography>
              <Launch></Launch>
            </StyledListItem>
          </List>
        </PopoverContent>
      </StyledPopover>
    </>
  );
};

export default Devices;
