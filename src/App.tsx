import { useLocation } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';
import { $USER, login } from './components/auth/effect';
import AudioBar from './components/audiobar';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Library from './components/library';
import RightSection from './components/rightSection';
import { ROUTES } from './router/constants';
import { useUnit } from 'effector-react';
import Header from './components/header';
import { AppContainer } from './styled';
import MainContainer from './components/main';

dayjs.extend(relativeTime);

export default function App({ children }: PropsWithChildren) {
  const location = useLocation();
  const user = useUnit($USER);

  useEffect(() => {
    if (!user) login({ username: 'pyromatic', password: 'rGkA$$dm#wMl5QD#RrMv' });
  }, [user]);

  useEffect(() => {
    const route = ROUTES.find((r) => r.PATH === location.pathname);
    document.title = 'Spotify Clone ' + (route?.PAGE_TITLE ?? '');
  }, []);

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
