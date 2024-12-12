import { createEffect, createEvent, createStore, sample } from 'effector';
import { PlaylistPageDto } from '../../api/dto/playlist';
import { API } from '../../api';
import { reset } from 'patronum';

export const resetPlaylistPageData = createEvent();
export const getPlaylistPageData = createEvent<string>();

export const $playlist = createStore<PlaylistPageDto | null>(null);
export const $playlistError = createStore<boolean>(false);

export const getPlaylistPageDataFx = createEffect<string, PlaylistPageDto, unknown>(async (id) => {
  const { data } = await API.playlists.page(id);
  return data;
});

sample({
  clock: getPlaylistPageData,
  target: getPlaylistPageDataFx,
});
sample({
  clock: getPlaylistPageDataFx.doneData,
  target: $playlist,
});
sample({
  clock: getPlaylistPageDataFx.failData,
  fn: () => true,
  target: $playlistError,
});
reset({
  clock: resetPlaylistPageData,
  target: [$playlist, $playlistError],
});
