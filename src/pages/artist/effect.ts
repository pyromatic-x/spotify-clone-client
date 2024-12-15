import { createEffect, createEvent, createStore, sample } from 'effector';
import { API } from '../../api';
import { reset } from 'patronum';
import { ArtistPageDataDto } from '../../api/dto/artist';

export const resetArtistPage = createEvent();
export const getArtistPage = createEvent<string>();

export const $artist = createStore<ArtistPageDataDto | null>(null);
export const $artistError = createStore<boolean>(false);

export const getArtistPageFx = createEffect<string, ArtistPageDataDto, unknown>(async (id) => {
  const { data } = await API.artists.page(id);
  return data;
});

sample({
  clock: getArtistPage,
  target: getArtistPageFx,
});
sample({
  clock: getArtistPageFx.doneData,
  target: $artist,
});
sample({
  clock: getArtistPageFx.failData,
  fn: () => true,
  target: $artistError,
});
reset({
  clock: resetArtistPage,
  target: [$artist, $artistError],
});
