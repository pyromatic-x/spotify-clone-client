import { createEvent, createStore, sample } from 'effector';
import { io } from 'socket.io-client';

export const connectToSocket = createEvent<void>();
export const disconnectFromSocket = createEvent();

export const $socket = createStore<ReturnType<typeof io> | null>(null);

sample({
  clock: connectToSocket,
  fn: () => {
    const socket = io(`${process.env.REACT_APP_WS_URL}`, {
      secure: true,
      reconnection: true,
      rejectUnauthorized: false,
    });

    socket.io.on('open', () => console.info(`connection to ${process.env.REACT_APP_WS_URL} established`));

    return socket;
  },
  target: $socket,
});

sample({
  clock: disconnectFromSocket,
  source: $socket,
  fn: (socket) => {
    socket?.disconnect();
    return null;
  },
  target: $socket,
});
