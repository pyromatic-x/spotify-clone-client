import { PropsWithChildren, useEffect } from 'react';
import { $USER, login } from './effect';
import { useUnit } from 'effector-react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const user = useUnit($USER);

  useEffect(() => {
    login({ username: 'Андрюха', password: 'rGkA$$dm#wMl5QD#RrMv' });
  }, []);

  return !!user ? <>{children}</> : <>** SHOW LOADER **</>;
};

export default AuthProvider;
