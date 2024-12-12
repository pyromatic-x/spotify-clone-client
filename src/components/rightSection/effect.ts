import { createEvent, createStore } from 'effector';

export enum RightSectionComponents {
  queue,
  devices,
  playing,
}

export const setRightSectionComponent = createEvent<keyof typeof RightSectionComponents | null>();
export const $rightSectionComponent = createStore<keyof typeof RightSectionComponents | null>(null).on(
  setRightSectionComponent,
  (state, payload) => (state === payload ? null : payload),
);
