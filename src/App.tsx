import { PropsWithChildren } from 'react';
import AudioBar from './components/audiobar';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Library from './components/library';
import RightSection from './components/rightSection';
import Header from './components/header';
import { AppContainer } from './styled';
import MainContainer from './components/main';

dayjs.extend(relativeTime);

export default function App({ children }: PropsWithChildren) {
  return (
    <AppContainer>
      <Header />
      <Library />
      <MainContainer>{children}</MainContainer>
      <RightSection />
      <AudioBar />
    </AppContainer>
  );
}
