import { createEvent, createStore, sample } from 'effector';
import { LoopVariants, ShuffleVariants } from './types';
import { shuffleFisherYates } from '../../utils/array';

// #region loop
export const changeLoop = createEvent();
export const $loop = createStore<keyof typeof LoopVariants>('DISABLED').on(changeLoop, (current) => {
  const variants = Object.keys(LoopVariants);
  const index = variants.findIndex((t) => t === current);
  const next = index + 1 > variants.length - 1 ? 0 : index + 1;

  return variants[next] as keyof typeof LoopVariants;
});
// #endregion

// #region shuffle
export const onShuffle = createEvent();

export const $shuffle = createStore<keyof typeof ShuffleVariants>('DISABLED').on(onShuffle, (current) => {
  const variants = Object.keys(ShuffleVariants);
  const index = variants.findIndex((t) => t === current);
  const next = index + 1 > variants.length - 1 ? 0 : index + 1;

  return variants[next] as keyof typeof ShuffleVariants;
});
// #endregion

// #region recently played
export const addToRecentlyPlayed = createEvent();
export const $recentlyPlayed = createStore<Array<any>>([]);
// #endregion

// #region queue
export const setCurrentTrackFromQueue = createEvent<string>();
export const nextTrack = createEvent();
export const prevTrack = createEvent();

export const onEnd = createEvent();
export const onDragQueue = createEvent<{
  dragged: string;
  target: string;
  selected: Array<any>;
  position: 'top' | 'bottom';
}>();
export const onTrackListened = createEvent<string>();

export const setQueue = createEvent<Array<any>>();
export const $queue = createStore<Array<any>>([]);
export const $queueSource = createStore({
  id: 'any',
  type: 'playlist',
  title: 'Liked Songs',
});

sample({
  clock: [nextTrack, prevTrack],
  target: addToRecentlyPlayed,
});

sample({
  clock: addToRecentlyPlayed,
  source: [$queue, $recentlyPlayed],
  fn: ([queue, recently]) => {
    const playing = queue.find((t) => t._current);
    playing._current = false;

    const alreadyInRecentlyIndex = recently.findIndex((t) => t.id === playing.id);
    if (alreadyInRecentlyIndex > -1) recently.splice(alreadyInRecentlyIndex, 1);

    return [playing, ...recently];
  },
  target: $recentlyPlayed,
});

sample({
  clock: setQueue,
  fn: (queue) => {
    queue[0]._current = true;
    return queue.map((track, index) => ({ ...track, _initial_order: index }));
  },
  target: $queue,
});

sample({
  clock: setCurrentTrackFromQueue,
  source: $queue,
  fn: (queue, id) => {
    const toPlayIndex = queue.findIndex((track: any) => track.id === id);

    return queue.map((track: any, index: number) => {
      if (index === toPlayIndex) return { ...track, _current: true };

      return { ...track, _current: false };
    });
  },
  target: $queue,
});

sample({
  clock: nextTrack,
  source: $queue,
  fn: (queue) => {
    const index = queue.findIndex((track: any) => track._current);
    const next = index + 1 >= queue.length ? 0 : index + 1;

    return queue.map((track: any, index: number) => {
      if (index === next) return { ...track, _current: true };

      return { ...track, _current: false };
    });
  },
  target: $queue,
});

sample({
  clock: prevTrack,
  source: $queue,
  fn: (queue) => {
    const index = queue.findIndex((track: any) => track._current);
    const prev = index - 1 < 0 ? queue.length - 1 : index - 1;

    return queue.map((track: any, index: number) => {
      if (index === prev) return { ...track, _current: true };

      return { ...track, _current: false };
    });
  },
  target: $queue,
});

sample({
  clock: onEnd,
  source: $loop,
  filter: (loop) => loop !== 'TRACK',
  target: nextTrack,
});

sample({
  clock: onDragQueue,
  source: $queue,
  fn: (queue, payload) => {
    let { selected } = payload;
    const { dragged, target, position } = payload;

    if (!selected || !selected.length) selected = [dragged];

    if (selected.includes(target)) return queue;

    const selectedStartIndex = queue.findIndex((t) => selected[0] === t.id);
    // const selectedEndIndex = queue.findIndex((t) => selected[selected.length - 1] === t.id);
    const targetIndex = queue.findIndex((t) => t.id === target);

    let placementIndex = 0;
    if (targetIndex === 0) {
      placementIndex = position === 'top' ? 0 : 1;
    } else {
      placementIndex = targetIndex + (position === 'top' ? 0 : 1);
    }

    const toMove = queue.splice(selectedStartIndex, selected.length);
    if (selectedStartIndex < targetIndex) placementIndex = placementIndex - toMove.length;

    queue.splice(placementIndex, 0, ...toMove);

    return [...queue] as any;
  },
  target: $queue,
});

sample({
  clock: $shuffle.updates,
  source: $queue,
  fn: (queue, shuffle) => {
    if (shuffle === 'SIMPLE') {
      return shuffleFisherYates(queue);
    } else {
      return queue.sort((a, b) => a._initial_order - b._initial_order);
    }
  },
  target: $queue,
});

// #endregion
