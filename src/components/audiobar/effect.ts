import { createEffect, createEvent, createStore, sample } from 'effector';

import { PlayDtoPayload } from '../../api/dto/play';
import { TrackDto } from '../../api/dto/track';
import { API } from '../../api';
import { RepeatVariants, TQueue } from './types';

// #region queue
export const $queue = createStore<TQueue | null>(null);
const $initialTracks = createStore<TQueue['tracks'] | null>(null);

export const init = createEvent();
export const changeQueue = createEvent<PlayDtoPayload>();
export const addToQueue = createEvent<TrackDto>();
export const removeFromQueue = createEvent<string>();

export const next = createEvent();
export const prev = createEvent();

export const toggleshuffle = createEvent();
export const toggleRepeat = createEvent();

const initFx = createEffect<unknown, TQueue, unknown>(async () => {
  const { data } = await API.play.liked();

  return {
    ...data,
    shuffled: false,
    repeat: 'DISABLED',
    initialTracks: data.tracks,
    current: 0,
  } as TQueue;
});

const changeQueueFx = createEffect<{ dto: PlayDtoPayload; queue: TQueue | null }, TQueue, unknown>(
  async ({ dto, queue }) => {
    const { data } = await API.play.get(dto);

    const shuffled = queue?.shuffled || false;
    const repeat = queue?.repeat || 'DISABLED';

    return {
      ...data,
      shuffled,
      repeat,
      initialTracks: data.tracks,
      current: 0,
    } as TQueue;
  },
);

sample({
  clock: init,
  target: initFx,
});
sample({
  clock: initFx.doneData,
  target: $queue,
});
sample({
  clock: initFx.doneData,
  fn: (payload) => payload.tracks,
  target: $initialTracks,
});

sample({
  clock: changeQueue,
  source: $queue,
  fn: (queue, payload) => ({ dto: payload, queue }),
  target: changeQueueFx,
});
sample({
  clock: changeQueueFx.doneData,
  target: $queue,
});

// sample({
//   clock: next,
//   source: $queue,
//   filter: (queue) => {
//     if (!queue) return false;

//     const { current, tracks, repeat } = queue;
//     return current === tracks.length - 1 && repeat === 'DISABLED';
//   },
//   target: init, // TODO: load random playlist
// });

sample({
  clock: next,
  source: $queue,
  fn: (queue) => {
    if (!queue) return queue;

    const { current, tracks, repeat } = queue;

    let next = current;

    if (current === tracks.length - 1) {
      if (repeat === 'QUEUE') next = 0;
      else if (repeat === 'TRACK') next = current;
    } else next += 1;

    return { ...queue, current: next };
  },
  target: $queue,
});

sample({
  clock: prev,
  source: $queue,
  fn: (queue) => {
    if (!queue) return queue;

    const { current, tracks, repeat } = queue;

    let prev = current;

    if (current === 0) {
      if (repeat === 'QUEUE') prev = tracks.length - 1;
    } else prev -= 1;

    return { ...queue, current: prev };
  },
  target: $queue,
});

sample({
  clock: toggleshuffle,
  source: $queue,
  fn: (queue) => {
    if (!queue) return queue;

    const { current, shuffled, tracks, initialTracks } = queue;

    if (shuffled) {
      return {
        ...queue,
        shuffled: false,
        current: initialTracks.indexOf(tracks[current]),
        currentBeforeShuffle: undefined,
        tracks: initialTracks,
      };
    } else {
      const currentTrack = tracks[current];
      const restTracks = tracks.filter((_, idx) => idx !== current);

      for (let i = restTracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [restTracks[i], restTracks[j]] = [restTracks[j], restTracks[i]];
      }

      return {
        ...queue,
        shuffled: true,
        tracks: [currentTrack, ...restTracks],
        current: 0,
        currentBeforeShuffle: current,
      };
    }
  },
  target: $queue,
});

sample({
  clock: toggleRepeat,
  source: $queue,
  fn: (queue) => {
    if (!queue) return queue;

    type KeyType = keyof typeof RepeatVariants;

    const keys = Object.keys(RepeatVariants) as KeyType[];
    const currentIndex = keys.indexOf(queue?.repeat);
    const nextIndex = (currentIndex + 1) % keys.length;
    const repeat = keys[nextIndex] as keyof typeof RepeatVariants;

    return { ...queue, repeat };
  },
  target: $queue,
});

// #endreion

// #region volume
// react-use-audio-player has a bug which resets VOLUME after each load event that's why create our own store
export const changeVolume = createEvent<number>();
export const $volume = createStore(1).on(changeVolume, (_, payload) => payload);
// #endregion

// #region muted
// react-use-audio-player has a bug which resets MUTED after each load event that's why create our own store
export const mute = createEvent<boolean>();
export const $muted = createStore(false).on(mute, (_, payload) => payload);
// #endregion
