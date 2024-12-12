import { Grid, SvgIconTypeMap, Tooltip } from '@mui/material';

import {
  Slideshow as NowPlayingIcon,
  SettingsVoice as LyricsIcon,
  QueueMusic as QueueIcon,
  Speaker as DevicesIcon,
} from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import AudiobarMetaVolume from './Volume';
import { memo } from 'react';
import { useUnit } from 'effector-react';
import {
  $rightSectionComponent,
  RightSectionComponents,
  setRightSectionComponent,
} from '../../rightSection/effect';
import { StyledButton } from './styled';
import { $queue } from '../effect';
import AudiobarMetaPiP from './PiP';
import AudiobarMetaFullscreen from './Fullscreen';

const Button = ({
  title,
  rightSectionComponent,
  disabled,
  Icon,
}: {
  title: string;
  rightSectionComponent?: keyof typeof RightSectionComponents;
  disabled?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
}) => {
  const component = useUnit($rightSectionComponent);
  const active = rightSectionComponent === component;

  return (
    <Tooltip title={title}>
      <span>
        <StyledButton
          disabled={!!disabled}
          active={active}
          onClick={() => rightSectionComponent && setRightSectionComponent(rightSectionComponent)}
        >
          <Icon />
        </StyledButton>
      </span>
    </Tooltip>
  );
};

const AudiobarMeta = () => {
  const queue = useUnit($queue);

  return (
    <Grid container gap={0.1} justifyContent="flex-end" alignItems="center" wrap="nowrap">
      <Button
        title="Now playing view"
        Icon={NowPlayingIcon}
        rightSectionComponent={'playing'}
        disabled={!queue}
      />
      <Button title="Lyrics" Icon={LyricsIcon} disabled />
      <Button title="Queue" Icon={QueueIcon} rightSectionComponent={'queue'} disabled={!queue} />
      <Button title="Connect to a device" Icon={DevicesIcon} rightSectionComponent={'devices'} />
      <AudiobarMetaVolume />
      <AudiobarMetaPiP />
      <AudiobarMetaFullscreen />
    </Grid>
  );
};

export default memo(AudiobarMeta);
