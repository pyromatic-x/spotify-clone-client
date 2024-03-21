import { ReactNode } from 'react';
import { Overlay, StyledModal } from './styled';

type IProps = {
  children: ReactNode;
  isOpen?: boolean;
};

const Modal = ({ children, isOpen }: IProps) => (
  <Overlay isOpen={isOpen}>
    <StyledModal>{children}</StyledModal>
  </Overlay>
);

export default Modal;
