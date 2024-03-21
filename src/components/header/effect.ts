import { createEvent, createStore } from 'effector';
import theme from '../../theme';

const DEFAULT_COLOR = theme.palette.background.purple;
export const DEFAULT_HEADER_HEIGHT = 72;

export const resetHeaderColor = createEvent();
export const setHeaderColor = createEvent<string>();
export const $headerColor = createStore<string>(DEFAULT_COLOR)
  .on(setHeaderColor, (_, payload) => payload || 'rgba(0,0,0,0)')
  .on(resetHeaderColor, () => DEFAULT_COLOR);

export const setHeaderHeight = createEvent<number>();
export const $headerHeight = createStore(DEFAULT_HEADER_HEIGHT).on(setHeaderHeight, (_, payload) => payload);
