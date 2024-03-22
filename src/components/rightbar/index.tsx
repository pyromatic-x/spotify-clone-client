import { CloseIconWrapper, Container } from './styled';
import { useUnit } from 'effector-react';
import { $rightbarContent, setRightbarContent } from './effect';
import { Components, IContent } from './constants';
import CloseIcon from '@mui/icons-material/Close';

const Rightbar = () => {
  const content = useUnit($rightbarContent);
  if (!content) return null;

  const Component = Components[content as keyof IContent];

  return (
    <Container>
      <Component />
      <CloseIconWrapper disableTouchRipple onClick={() => setRightbarContent(null)}>
        <CloseIcon />
      </CloseIconWrapper>
    </Container>
  );
};

export default Rightbar;
