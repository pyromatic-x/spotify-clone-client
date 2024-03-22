import { useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import MainContainer from '../common/MainContainer';
import Header from '../header';
import { PropsWithChildren, useEffect, useMemo, useRef } from 'react';
import NoMobileModal from '../../NoMobileMiddleware';
import { RootContainer, StyledOutletContainer } from './styles';
import { setOutletWidth } from './effect';
import { IRoute, ROUTES } from '../../router/constants';
import { useUnit } from 'effector-react';
import { $headerHeight } from '../header/effect';
import Leftbar from '../leftbar';
import AudioBar from '../audiobar';
import Rightbar from '../rightbar';

export default function Root({ children }: PropsWithChildren) {
  const headerHeight = useUnit($headerHeight);

  const containerRef = useRef(null);

  const location = useLocation();
  const theme = useTheme();

  const routes = useMemo(() => Object.keys(ROUTES).map((key) => ROUTES[key]) as Array<IRoute>, []);

  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(([container]) => {
      setOutletWidth(container.contentRect.width);
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    document.title = routes.find((t) => t.PATH === location.pathname)?.PAGE_TITLE || 'Spotify';
  }, [location, routes]);

  return (
    <RootContainer>
      <Leftbar />
      <MainContainer sx={{ padding: '0' }} gridArea="main">
        <Header containerRef={containerRef} />
        <StyledOutletContainer
          ref={containerRef}
          id="OutletContainer"
          padding={`${headerHeight + 'px'} 14px 20px 14px`}
        >
          {children ?? <Outlet />}
        </StyledOutletContainer>
      </MainContainer>
      <Rightbar />
      {sm ? <NoMobileModal /> : <AudioBar />}
    </RootContainer>
  );
}
