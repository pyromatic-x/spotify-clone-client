import { PropsWithChildren, useEffect } from 'react';
import { login } from './effect';

const AuthProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    login({ username: 'Андрюха', password: 'rGkA$$dm#wMl5QD#RrMv' });
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
