import { createEvent, createStore, sample } from 'effector';
import { LoopVariants, ShuffleVariants } from './types';
import { playerPlaylist } from '../home/constants';

// #region loop
export const changeLoop = createEvent();
export const $loop = createStore<keyof typeof LoopVariants>('DISABLED').on(changeLoop, (current) => {
  const variants = Object.keys(LoopVariants);
  const index = variants.findIndex((t) => t === current);
  const next = index + 1 > variants.length - 1 ? 0 : index + 1;

  return variants[next] as keyof typeof LoopVariants;
});
// #endregion

// #region queue
export const setQueue = createEvent<Array<any>>();
export const $queue = createStore<Array<any>>(playerPlaylist).on(setQueue, (_, payload) => {
  setCurrentTrack(payload[0]);
  return payload;
});
// #endregion

// #region current
const setCurrentTrack = createEvent<any>();
export const nextTrack = createEvent();
export const prevTrack = createEvent();
export const onEnd = createEvent();

export const $currentTrack = createStore(playerPlaylist[0])
  .on(nextTrack, (state: any) => {
    const queue = $queue.getState();
    const index = queue.findIndex((t: any) => t.id === state.id);
    const next = index + 1 > queue.length ? 0 : index + 1;

    return queue[next];
  })
  .on(prevTrack, (state: any) => {
    const queue = $queue.getState();
    const index = queue.findIndex((t: any) => t.id === state.id);

    const prev = index - 1 < 0 ? queue.length - 1 : index - 1;

    return queue[prev];
  });

sample({
  clock: onEnd,
  source: $currentTrack,
  filter: () => {
    const loop = $loop.getState();
    return loop !== 'TRACK';
  },
  target: nextTrack,
});

sample({
  clock: onEnd,
  source: $currentTrack,
  filter: () => $loop.getState() === 'TRACK',
  fn: (state) => state,
  target: $currentTrack,
});
// #endregion

// #region shuffle
export const changeShuffle = createEvent();
export const $shuffle = createStore<keyof typeof ShuffleVariants>('DISABLED').on(changeShuffle, (current) => {
  const variants = Object.keys(ShuffleVariants);
  const index = variants.findIndex((t) => t === current);
  const next = index + 1 > variants.length - 1 ? 0 : index + 1;

  return variants[next] as keyof typeof ShuffleVariants;
});
// #endregion
