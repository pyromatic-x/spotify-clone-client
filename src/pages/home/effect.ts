import { createEffect, createEvent, createStore, sample } from 'effector';
import { PersonalDto } from '../../api/dto/personal';
import { API } from '../../api';
import { reset } from 'patronum';

export const resetHomeCompilations = createEvent();

export const getHomeCompilations = createEvent();
export const $homeCompilations = createStore<PersonalDto | null>(null);
export const getHomeCompilationsFx = createEffect<unknown, PersonalDto, unknown>(async () => {
  const { data } = await API.personal.get();
  return data;
});

sample({
  clock: getHomeCompilations,
  target: getHomeCompilationsFx,
});
sample({
  clock: getHomeCompilationsFx.doneData,
  target: $homeCompilations,
});

reset({
  clock: resetHomeCompilations,
  target: $homeCompilations,
});
