import { Box } from '@mui/material';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainerWrapper } from './styled';
import { changeMainScroll, changeMainWidth } from './effect';
import { useUnit } from 'effector-react';
import { $rightSectionComponent } from '../rightSection/effect';
import MainSticky from './Sticky';

const MainContainer = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);

  const rightSection = useUnit($rightSectionComponent);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        changeMainWidth(entry.target.clientWidth);
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

  const handleOnScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    changeMainScroll(event.currentTarget.scrollTop);
  };

  return (
    <MainContainerWrapper
      ref={ref}
      style={{ gridColumn: !rightSection ? '2 / 4' : '' }}
      onScroll={handleOnScroll}
    >
      {children ?? (
        <Box maxWidth="1920px" margin="0 auto">
          <Outlet />
        </Box>
      )}
      <MainSticky />
    </MainContainerWrapper>
  );
};

export default MainContainer;
