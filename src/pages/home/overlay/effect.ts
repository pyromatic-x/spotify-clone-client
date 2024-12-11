import { createEvent, createStore } from 'effector';

export type TOverlayColor = { hex: string; rgba: string };

export const changeHomeOverlayColor = createEvent<string>();
export const $homeOverlayColor = createStore<string>('').on(changeHomeOverlayColor, (_, payload) => payload);
