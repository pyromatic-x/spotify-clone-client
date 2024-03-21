import Navigation from './Navigation';
import Menu from './Menu';
import { StyledHeader } from './styled';
import { RefObject, memo, useEffect, useState } from 'react';
import { $headerColor } from './effect';
import { useUnit } from 'effector-react';
import Extensions from './extensions';

interface IProps {
  containerRef: RefObject<HTMLDivElement>;
}

const Header = memo(({ containerRef }: IProps) => {
  const [opacity, setOpacity] = useState(0);
  const headerColor = useUnit($headerColor);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', (event: any) => {
        event.stopPropagation();

        const breakpoint = 200;
        const scrollTop = event.target!.scrollTop;
        const newOpacity = Number(Number((scrollTop / breakpoint) * 100 * 0.01).toPrecision(1));

        if (scrollTop > breakpoint) setOpacity(1);
        else setOpacity(newOpacity);
      });
    }
  }, [containerRef]);

  return (
    <StyledHeader bgColor={headerColor} opacity={opacity}>
      <Navigation />
      <Menu />
      <Extensions />
    </StyledHeader>
  );
});

export default Header;
