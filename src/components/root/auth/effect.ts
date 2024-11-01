import { createEffect, createEvent, sample } from 'effector';
import { API } from '../../../api';

type LoginPayload = {
  username: string;
  password: string;
};

export const login = createEvent<LoginPayload>();
export const loginFx = createEffect<LoginPayload, unknown, unknown>(
  async (data) => await API.auth.login(data),
);

sample({
  clock: login,
  target: loginFx,
});
