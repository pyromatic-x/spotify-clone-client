import { useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import MainContainer from '../common/MainContainer';
import { PropsWithChildren, useEffect, useMemo, useRef } from 'react';
import NoMobileModal from '../../NoMobileMiddleware';
import { RootContainer, StyledOutletContainer } from './styled';
import { setOutletWidth, setSectionItemsCountByWidth } from './effect';
import { IRoute, ROUTES } from '../../router/constants';
import AudioBar from '../audiobar';
import Rightbar from '../rightbar';
import RootHeader from './header';
import Header from '../header';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Library from '../library';

dayjs.extend(relativeTime);

export default function Root({ children }: PropsWithChildren) {
  const containerRef = useRef(null);

  const location = useLocation();
  const theme = useTheme();

  const routes = useMemo(() => Object.keys(ROUTES).map((key) => ROUTES[key]) as Array<IRoute>, []);

  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(([container]) => {
      setOutletWidth(container.contentRect.width);
      setSectionItemsCountByWidth(container.contentRect.width);
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    document.title = routes.find((t) => t.PATH === location.pathname)?.PAGE_TITLE || 'Spotify';
  }, [location, routes]);

  const { ROOT_HEADER_EXTENSION } = Object.keys(ROUTES)
    .map((key: any) => ROUTES[key])
    .find((t) => t.PATH === location.pathname) as IRoute;

  return (
    <RootContainer>
      <Header />
      <Library />
      <MainContainer sx={{ padding: '0', overflow: 'hidden' }} gridArea="main">
        <RootHeader containerRef={containerRef} />
        <StyledOutletContainer
          ref={containerRef}
          id="OutletContainer"
          padding={`${!!ROOT_HEADER_EXTENSION ? 64 : 22}px 22px 40px 22px`}
        >
          {children ?? <Outlet />}
        </StyledOutletContainer>
      </MainContainer>
      <Rightbar />
      {sm ? <NoMobileModal /> : <AudioBar />}
    </RootContainer>
  );
}
