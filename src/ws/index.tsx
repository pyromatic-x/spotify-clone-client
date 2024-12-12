import { useEffect } from 'react';
import { connectToSocket, disconnectFromSocket } from './effect';

const Socket = () => {
  useEffect(() => {
    connectToSocket();

    return disconnectFromSocket;
  }, []);

  return <></>;
};

export default Socket;
