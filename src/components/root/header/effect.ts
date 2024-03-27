import { createEvent, createStore } from 'effector';
import theme from '../../../theme';

const DEFAULT_COLOR = theme.palette.background.purple;

export const setHeaderTransition = createEvent<boolean>();
export const $headerTransition = createStore(true).on(setHeaderTransition, (state) => !state);

export const resetHeaderColor = createEvent();
export const setHeaderColor = createEvent<string>();
export const $headerColor = createStore<string>(DEFAULT_COLOR)
  .on(setHeaderColor, (_, payload) => payload || 'rgba(0,0,0,0)')
  .on(resetHeaderColor, () => DEFAULT_COLOR);
