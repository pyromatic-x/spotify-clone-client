import { createEvent, createStore, sample, createEffect } from 'effector';

import { API } from '../../api';
import { AuthUserDto, AuthUserPayload } from '../../api/dto/auth';

export const login = createEvent<AuthUserPayload>();
export const $USER = createStore<AuthUserDto | null>(null);
export const loginFx = createEffect<AuthUserPayload, AuthUserDto, unknown>(async (params) => {
  const { data } = await API.auth.login(params);
  return data;
});

sample({
  clock: login,
  target: loginFx,
});

sample({
  clock: loginFx.doneData,
  target: $USER,
});
