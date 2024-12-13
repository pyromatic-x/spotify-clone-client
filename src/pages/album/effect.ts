import { createEffect, createEvent, createStore, sample } from 'effector';
import { API } from '../../api';
import { reset } from 'patronum';
import { AlbumPageDto } from '../../api/dto/album';

export const resetAlbumPageData = createEvent();
export const getAlbumPageData = createEvent<string>();

export const $album = createStore<AlbumPageDto | null>(null);
export const $albumError = createStore<boolean>(false);

export const getAlbumPageDataFx = createEffect<string, AlbumPageDto, unknown>(async (id) => {
  const { data } = await API.albums.page(id);
  return data;
});

sample({
  clock: getAlbumPageData,
  target: getAlbumPageDataFx,
});
sample({
  clock: getAlbumPageDataFx.doneData,
  target: $album,
});
sample({
  clock: getAlbumPageDataFx.failData,
  fn: () => true,
  target: $albumError,
});
reset({
  clock: resetAlbumPageData,
  target: [$album, $albumError],
});
