import { createEvent, createStore } from 'effector';

const BREAKPOINT = 100;

export const onUnitPageScroll = createEvent<number>();
export const $showUnitPageHeader = createStore<boolean>(false).on(
  onUnitPageScroll,
  (_, payload) => payload > BREAKPOINT,
);
