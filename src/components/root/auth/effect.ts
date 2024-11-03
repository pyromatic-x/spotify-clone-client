import { createEffect, createEvent, createStore, sample } from 'effector';
import { API } from '../../../api';
import { AuthUserPayload, AuthUserDto } from '../../../api/types';

export const login = createEvent<AuthUserPayload>();
export const $USER = createStore<any>(null);
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
