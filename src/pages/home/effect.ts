import { createEvent, createStore } from 'effector';
import theme from '../../theme';
import { hexToRgbA } from '../../utils/strings';

const DEFAULT_BACKGROUND_COLOR = theme.palette.background.purple;

export const resetBackgroundColor = createEvent();
export const setBackgroundColor = createEvent<string>();
export const $backgroundColor = createStore<string>(DEFAULT_BACKGROUND_COLOR)
  .on(setBackgroundColor, (_, payload) => hexToRgbA(payload, 0.5) || 'rgba(0,0,0,0)')
  .on(resetBackgroundColor, () => DEFAULT_BACKGROUND_COLOR);
