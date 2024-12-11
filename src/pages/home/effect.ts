import { createEffect, createEvent, createStore, sample } from 'effector';
import { PersonalDto } from '../../api/dto/personal';
import { API } from '../../api';

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
