import { useUnit } from 'effector-react';
import { StyledBackground } from './styled';
import { $backgroundColor } from '../../../pages/home/effect';
import { $headerHeight } from '../../header/effect';

export default function Background() {
  const bgColor = useUnit($backgroundColor);
  const headerHeight = useUnit($headerHeight);

  return <StyledBackground bgColor={bgColor} top={`calc(-${headerHeight}px)`} />;
}
