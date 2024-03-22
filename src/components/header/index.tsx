import Navigation from './Navigation';
import Menu from './Menu';
import { StyledHeader } from './styled';
import { RefObject, memo, useEffect, useState } from 'react';
import { $headerColor, setHeaderTransition } from './effect';
import { useUnit } from 'effector-react';
import Extensions from './extensions';
import { useLocation } from 'react-router-dom';

interface IProps {
  containerRef: RefObject<HTMLDivElement>;
}

const Header = memo(({ containerRef }: IProps) => {
  const location = useLocation();

  const [opacity, setOpacity] = useState(0);
  const headerColor = useUnit($headerColor);

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

  return (
    <StyledHeader bgColor={headerColor} opacity={opacity}>
      <Navigation />
      <Menu />
      <Extensions />
    </StyledHeader>
  );
});

export default Header;
