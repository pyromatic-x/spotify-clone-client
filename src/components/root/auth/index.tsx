import { PropsWithChildren, useEffect } from 'react';
import { login } from './effect';

const AuthProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    login({ username: 'pyromaticx', password: 'rGkA$$dm#wMl5QD#RrMv' });
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
