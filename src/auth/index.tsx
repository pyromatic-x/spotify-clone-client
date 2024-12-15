import { useUnit } from 'effector-react';
import { PropsWithChildren, useEffect } from 'react';
import { $USER, verify } from './effect';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const user = useUnit($USER);

  useEffect(() => {
    verify();
  }, []);

  return !!user && <>{children}</>;
};

export default AuthProvider;
