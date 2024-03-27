import { useUnit } from 'effector-react';
import { StyledBackground } from './styled';
import { $backgroundColor } from '../../../pages/home/effect';

export default function Background() {
  const bgColor = useUnit($backgroundColor);

  return <StyledBackground bgColor={bgColor} top={'-64px'} />;
}
