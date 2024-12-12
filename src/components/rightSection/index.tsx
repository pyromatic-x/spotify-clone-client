import { useUnit } from 'effector-react';
import { $rightSectionComponent } from './effect';
import { Box } from '@mui/material';
import { StyledRightSection } from './styled';
import RightSectionQueueContainer from './queue';
import { UIEvent, useEffect, useState } from 'react';
import RightSectionDevices from './devices';
import RightSectionPlaying from './playing';

const RightSection = () => {
  const component = useUnit($rightSectionComponent);

  const [showHeaderShadow, setShowHeaderShadow] = useState(false);

  const handleOnScroll = (e: UIEvent<HTMLElement>) => {
    const value = (e.target as HTMLElement).scrollTop;
    setShowHeaderShadow(value >= 50);
  };

  useEffect(() => {
    if (!component) setShowHeaderShadow(false);
  }, [component]);

  return (
    <Box gridArea="rightbar">
      {!!component && (
        <StyledRightSection onScroll={handleOnScroll}>
          {component === 'queue' && <RightSectionQueueContainer showHeaderShadow={showHeaderShadow} />}
          {component === 'devices' && <RightSectionDevices showHeaderShadow={showHeaderShadow} />}
          {component === 'playing' && <RightSectionPlaying showHeaderShadow={showHeaderShadow} />}
        </StyledRightSection>
      )}
    </Box>
  );
};

export default RightSection;
