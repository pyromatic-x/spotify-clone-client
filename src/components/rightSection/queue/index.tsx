import { IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import { useState } from 'react';
import RightSectionQueue from './Queue';
import { RightSectionHeaderContainer } from '../styled';
import { setRightSectionComponent } from '../effect';
import { Close as CloseIcon } from '@mui/icons-material';

enum TabVariants {
  queue,
  recently,
}

const RightSectionQueueContainer = ({ showHeaderShadow }: { showHeaderShadow: boolean }) => {
  const [tab, setTab] = useState(TabVariants.queue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <RightSectionHeaderContainer showHeaderShadow={showHeaderShadow}>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Queue" />
          <Tab label="Recently played" />
        </Tabs>
        <Tooltip title="Close">
          <IconButton variant="fill-on-hover" onClick={() => setRightSectionComponent(null)}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </RightSectionHeaderContainer>

      {tab === 0 && <RightSectionQueue />}
    </>
  );
};

export default RightSectionQueueContainer;
