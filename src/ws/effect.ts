import { createEvent, createStore, sample } from 'effector';
import { io } from 'socket.io-client';

export const connectToSocket = createEvent<void>();
export const disconnectFromSocket = createEvent();

export const $socket = createStore<ReturnType<typeof io> | null>(null);

const prodOptions = {
  secure: true,
  reconnection: true,
  rejectUnauthorized: false,
};

sample({
  clock: connectToSocket,
  fn: () => {
    const url = `${process.env.REACT_APP_WS_URL}`;

    const socket = io(url, process.env.NODE_ENV === 'production' || true ? prodOptions : {});
    // const socket = io(`ws://localhost:3010/ws`);
    // const socket = io(`${process.env.REACT_APP_WS_URL}`, {
    //   secure: true,
    //   reconnection: true,
    //   rejectUnauthorized: false,
    // });

    socket.io.on('open', () => console.info(`connection to ${url} established`));
    socket.io.on('error', (err) => console.error(`connection to ${url} failed: `, err));

    socket.onAny((eventName, payload) => {
      console.log(`event from socket: ${eventName}. Payload: `, payload);
    });

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
