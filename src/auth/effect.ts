import { createEvent, createStore, sample, createEffect } from 'effector';
import { io } from 'socket.io-client';

import { API } from '../api';
import { AuthUserDto } from '../api/dto/auth';

export const login = createEvent();
export const verify = createEvent();

export const $USER = createStore<AuthUserDto | null>(null);

export const loginFx = createEffect<unknown, AuthUserDto, unknown>(async () => {
  const { data } = await API.auth.login({ username: 'pyromatic', password: 'rGkA$$dm#wMl5QD#RrMv' });
  return data;
});
export const verifyFx = createEffect<unknown, AuthUserDto, unknown>(async () => {
  const { data } = await API.auth.verify();
  return data;
});

sample({
  clock: login,
  target: loginFx,
});
sample({
  clock: verify,
  target: verifyFx,
});

sample({
  clock: [loginFx.doneData, verifyFx.doneData],
  target: $USER,
});

sample({
  clock: verifyFx.failData,
  target: login,
});

export const disconnectFromSocket = createEvent();
export const $socket = createStore<ReturnType<typeof io> | null>(null);

const prodOptions = {
  secure: true,
  reconnection: true,
  rejectUnauthorized: false,
};

sample({
  clock: [loginFx.doneData, verifyFx.doneData],
  source: $USER,
  fn: (user) => {
    const url = `${process.env.REACT_APP_WS_URL}`;

    const socket = io(url, {
      extraHeaders: {
        'X-User-Id': user!._id,
      },
      ...(process.env.NODE_ENV === 'production' && prodOptions),
    });

    socket.io.on('open', () => console.info(`connection to ${url} established`));
    socket.io.on('error', (err) => console.error(`connection to ${url} failed: `, err));

    if (process.env.NODE_ENV === 'development') {
      socket.onAny((eventName, payload) => {
        console.log(`event from socket: ${eventName}. Payload: `, payload);
      });
    }

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
