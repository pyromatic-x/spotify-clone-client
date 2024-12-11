import { useUnit } from 'effector-react';
import { HomeOverlayColor, HomeOverlayContainer, HomeOverlayShadow } from './styled';
import { $homeOverlayColor, changeHomeOverlayColor } from './effect';
import { useEffect } from 'react';
import { $homeCompilations } from '../effect';

const HomeOverlay = () => {
  const compilations = useUnit($homeCompilations);
  const color = useUnit($homeOverlayColor);

  useEffect(() => {
    if (compilations) changeHomeOverlayColor('#21115F');

    return function () {
      changeHomeOverlayColor('#222222');
    };
  }, [compilations]);

  return (
    <HomeOverlayContainer>
      <HomeOverlayColor overlayColor={color} />
      <HomeOverlayShadow />
    </HomeOverlayContainer>
  );
};

export default HomeOverlay;
