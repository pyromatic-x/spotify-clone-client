import { StyledHeader } from './styled';
import { RefObject, memo, useEffect, useState } from 'react';
import { $headerColor, setHeaderTransition } from './effect';
import { useUnit } from 'effector-react';
import { useLocation } from 'react-router-dom';
import { IRoute, ROUTES } from '../../../router/constants';

interface IProps {
  containerRef: RefObject<HTMLDivElement>;
}

const RootHeader = memo(({ containerRef }: IProps) => {
  const [opacity, setOpacity] = useState(0);
  const headerColor = useUnit($headerColor);

  const location = useLocation();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', (event: any) => {
        event.stopPropagation();

        const breakpoint = 150;
        const scrollTop = event.target!.scrollTop;
        const newOpacity = Number(Number((scrollTop / breakpoint) * 100 * 0.01).toPrecision(1));

        if (scrollTop > breakpoint) setOpacity(1);
        else setOpacity(newOpacity);
      });
    }
  }, [containerRef]);

  useEffect(() => {
    const path = location.pathname;

    setHeaderTransition(path.includes('home') || path === '/');
  }, [location]);

  const { ROOT_HEADER_EXTENSION } = Object.keys(ROUTES)
    .map((key: any) => ROUTES[key])
    .find((t) => t.PATH === location.pathname) as IRoute;

  if (!ROOT_HEADER_EXTENSION) return null;

  return (
    <StyledHeader bgColor={headerColor} opacity={opacity}>
      {ROOT_HEADER_EXTENSION}
    </StyledHeader>
  );
});

export default RootHeader;
