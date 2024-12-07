import { Outlet, useLocation } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';
import { RootContainer } from './styled';
import { $USER, login } from './effect';
import AudioBar from '../audiobar';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Library from '../library';
import RightSection from '../rightSection';
import { ROUTES } from '../../router/constants';
import { useUnit } from 'effector-react';

dayjs.extend(relativeTime);

export default function Root({ children }: PropsWithChildren) {
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
    <RootContainer>
      <Library />
      <main>{children ?? <Outlet />}</main>
      <RightSection />
      <AudioBar />
    </RootContainer>
  );
}
