import { Box, Grid, IconButton, Link, SvgIconTypeMap, Tooltip, Typography } from '@mui/material';
import { RightSectionHeaderContainer } from '../styled';
import { setRightSectionComponent } from '../effect';
import { Close as CloseIcon } from '@mui/icons-material';
import { PropsWithChildren, useEffect, useState } from 'react';
import { getCurrentDevice } from './utils';
import { CurrentDeviceContainer, StyledExternalLink } from './styled';

import {
  Speaker as ConnectIcon,
  Wifi as WifiIcon,
  Devices as DevicesIcon,
  PowerSettingsNew as PowerIcon,
  Launch as ExternalLinkIcon,
} from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const defaultDevice = 'This computer';

const RightSectionDevices = ({ showHeaderShadow }: { showHeaderShadow: boolean }) => {
  const [device, setDevice] = useState(defaultDevice);

  useEffect(() => {
    const fetchAudioOutputDevices = async () => setDevice(await getCurrentDevice());

    fetchAudioOutputDevices();

    navigator.mediaDevices.addEventListener('devicechange', fetchAudioOutputDevices);

    return () => {
      navigator.mediaDevices.removeEventListener('devicechange', fetchAudioOutputDevices);
    };
  }, []);

  return (
    <>
      <RightSectionHeaderContainer showHeaderShadow={showHeaderShadow} mb={2}>
        <Typography fontWeight="bold" ml="4px">
          Connect to a device
        </Typography>
        <Tooltip title="Close">
          <IconButton variant="fill-on-hover" onClick={() => setRightSectionComponent(null)}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </RightSectionHeaderContainer>
      <Grid
        container
        flexDirection="column"
        justifyContent="space-between"
        ml="4px"
        height="calc(100% - 56px)"
      >
        <Box>
          <CurrentDeviceContainer mb={3}>
            <Grid container alignItems="center">
              <ConnectIcon color="primary" />
              <Typography fontSize="1.5rem" fontWeight="bold" ml={1}>
                Current device
              </Typography>
            </Grid>
            <Typography fontSize="0.95rem" truncate={1} maxWidth="360px">
              {device + (device !== defaultDevice ? ' from this computer' : '')}
            </Typography>
          </CurrentDeviceContainer>
          <Box pl="8px">
            <Typography fontWeight="bold" mb={2}>
              No other devices found
            </Typography>
            <Grid container flexDirection="column" gap={4} maxWidth="90%">
              <DevicesRow
                title="Check your WiFi"
                description="Connect the devices you're using to the same WiFi"
                Icon={WifiIcon}
              />
              <DevicesRow
                title="Play from another device"
                description="It will automatically apear here"
                Icon={DevicesIcon}
              />
              <DevicesRow
                title="Restart your speaker"
                description="Or follow setup instructions if it's a new device"
                Icon={PowerIcon}
              />
            </Grid>
          </Box>
        </Box>
        <Box>
          <ExternalLink>Don't see your device?</ExternalLink>
          <ExternalLink>What can I connect to?</ExternalLink>
        </Box>
      </Grid>
    </>
  );
};

type TDevicesRowProps = {
  title: string;
  description: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
};

const DevicesRow = ({ title, description, Icon }: TDevicesRowProps) => (
  <Grid container alignItems="center" gap={3} wrap="nowrap">
    <Icon color="secondary" sx={{ fontSize: '1.8rem' }} />
    <Box>
      <Typography>{title}</Typography>
      <Typography fontSize="0.95rem" color="secondary">
        {description}
      </Typography>
    </Box>
  </Grid>
);

const ExternalLink = ({ children }: PropsWithChildren) => (
  <StyledExternalLink>
    <Link>{children}</Link>
    <ExternalLinkIcon color="secondary" sx={{ fontSize: '1.2rem' }} />
  </StyledExternalLink>
);

export default RightSectionDevices;
