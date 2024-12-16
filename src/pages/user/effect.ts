import { createEffect, createEvent, createStore, sample } from 'effector';
import { API } from '../../api';
import { reset } from 'patronum';
import { UserPageDto } from '../../api/dto/user';

export const resetUserPageData = createEvent();
export const getUserPageData = createEvent<string>();

export const $user = createStore<UserPageDto | null>(null);
export const $userError = createStore<boolean>(false);

export const getUserPageDataFx = createEffect<string, UserPageDto, unknown>(async (id) => {
  const { data } = await API.users.page(id);
  return data;
});

sample({
  clock: getUserPageData,
  target: getUserPageDataFx,
});
sample({
  clock: getUserPageDataFx.doneData,
  target: $user,
});
sample({
  clock: getUserPageDataFx.failData,
  fn: () => true,
  target: $userError,
});
reset({
  clock: resetUserPageData,
  target: [$user, $userError],
});
