import { CloseIconWrapper, Container } from './styled';
import { useUnit } from 'effector-react';
import { $rightbarContent, setRightbarContent } from './effect';
import { Components, IContent } from './constants';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from '@mui/material';

const Rightbar = () => {
  const content = useUnit($rightbarContent);
  if (!content) return null;

  const { COMPONENT: Component, SCROLLABLE } = Components[content as keyof IContent];

  return (
    <Container overflow={SCROLLABLE ? 'scroll' : 'inherit'}>
      <Component />
      <Tooltip title="Close">
        <CloseIconWrapper disableTouchRipple onClick={() => setRightbarContent(null)}>
          <CloseIcon />
        </CloseIconWrapper>
      </Tooltip>
    </Container>
  );
};

export default Rightbar;
