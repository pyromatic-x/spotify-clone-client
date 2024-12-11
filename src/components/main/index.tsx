import { Box } from '@mui/material';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainerWrapper } from './styled';
import { changeMainWidth } from './effect';

const MainContainer = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        changeMainWidth(entry.contentRect.width);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <MainContainerWrapper ref={ref}>
      {children ?? (
        <Box maxWidth="1920px" margin="0 auto">
          <Outlet />
        </Box>
      )}
    </MainContainerWrapper>
  );
};

export default MainContainer;
