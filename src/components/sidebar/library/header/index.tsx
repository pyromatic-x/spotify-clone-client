import { useUnit } from 'effector-react';
import { $collapsed, $expanded, $shadow } from '../../effect';
import { HeaderContainer } from './styled';
import Collapsed from './Collapsed';
import Full from './full';

const Header = () => {
  const collapsed = useUnit($collapsed);
  const shadow = useUnit($shadow);
  const expanded = useUnit($expanded);

  return (
    <HeaderContainer shadow={!!shadow} expanded={!!expanded}>
      {collapsed ? <Collapsed /> : <Full />}
    </HeaderContainer>
  );
};

export default Header;
