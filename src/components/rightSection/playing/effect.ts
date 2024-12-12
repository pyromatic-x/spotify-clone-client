import { createEffect, createEvent, createStore, sample } from 'effector';
import { API } from '../../../api';
import { $queue } from '../../audiobar/effect';
import { TQueue } from '../../audiobar/types';
import { reset } from 'patronum';
import { TrackDto } from '../../../api/dto/track';
import { ArtistBioDto } from '../../../api/dto/artist';

export const resetNowPlaying = createEvent();

export type TNowPlaying = {
  track: {
    _id: string;
    name: string;
  };
  album: TrackDto['album'];
  artist: ArtistBioDto & { name: string };
  next: (TrackDto & { target: string; _collection: TQueue['_collection']; index: number }) | null;
};

export const getNowPlayingDetails = createEvent<string>();
export const $nowPlaying = createStore<TNowPlaying | null>(null);
export const getNowPlayingDetailsFx = createEffect<{ queue: TQueue; artistId: string }, TNowPlaying, unknown>(
  async ({ queue, artistId }) => {
    const { data } = await API.artists.bio(artistId);

    const { current, repeat, tracks, target, _collection } = queue;

    let nextIndex = null;
    if (current === tracks.length - 1) {
      if (repeat === 'QUEUE') nextIndex = 0;
      else if (repeat === 'TRACK') nextIndex = current;
    } else nextIndex = current + 1;

    const currentTrack = queue.tracks[queue.current];
    const nextTrack = nextIndex ? queue.tracks[nextIndex] : null;

    return {
      track: {
        _id: currentTrack._id,
        name: currentTrack.name,
      },
      album: currentTrack.album,
      artist: {
        name: currentTrack.author.name,
        ...data,
      },
      ...(nextTrack && {
        next: {
          ...nextTrack,
          target,
          _collection,
          index: nextIndex,
        },
      }),
    } as TNowPlaying;
  },
);

sample({
  clock: getNowPlayingDetails,
  source: $queue,
  fn: (queue, artistId) => ({ queue: queue!, artistId }),
  target: getNowPlayingDetailsFx,
});

sample({
  clock: getNowPlayingDetailsFx.doneData,
  target: $nowPlaying,
});

reset({
  clock: resetNowPlaying,
  target: $nowPlaying,
});
