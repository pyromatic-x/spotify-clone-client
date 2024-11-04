import { Outlet } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';
import { RootContainer } from './styled';
import { login } from './effect';
import AudioBar from '../audiobar';
import Header from '../header';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Library from '../library';
import RightSection from '../rightSection';

dayjs.extend(relativeTime);

export default function Root({ children }: PropsWithChildren) {
  useEffect(() => {
    login({ username: 'Андрюха', password: 'rGkA$$dm#wMl5QD#RrMv' });
  }, []);

  return (
    <RootContainer>
      <Header />
      <Library />
      <main>{children ?? <Outlet />}</main>
      <RightSection />
      <AudioBar />
    </RootContainer>
  );
}
