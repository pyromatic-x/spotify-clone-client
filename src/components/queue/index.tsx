import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import { Content, StyledButton, Tabs } from './styled';
import QueueList from './QueueList';
import RecentlyPlayedList from './RecentlyPlayedList';

type ITabs = 'QUEUE' | 'RECENTLY_PLAYED';

const Queue = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<ITabs>('QUEUE');
  const [addShadow, setAddShadow] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setAddShadow(event.currentTarget.scrollTop > 1);
  };

  const handleTabChange = (tab: ITabs) => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    setActiveTab(tab);
  };

  return (
    <Box position="relative">
      <Tabs addShadow={addShadow}>
        <StyledButton active={activeTab === 'QUEUE'} onClick={() => handleTabChange('QUEUE')}>
          Queue
        </StyledButton>
        <StyledButton
          active={activeTab === 'RECENTLY_PLAYED'}
          onClick={() => handleTabChange('RECENTLY_PLAYED')}
        >
          Recently played
        </StyledButton>
      </Tabs>
      <Content onScroll={handleScroll} ref={contentRef}>
        {activeTab === 'QUEUE' ? <QueueList /> : <RecentlyPlayedList />}
      </Content>
    </Box>
  );
};

export default Queue;
