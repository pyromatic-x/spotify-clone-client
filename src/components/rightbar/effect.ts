import { createEvent, createStore } from 'effector';
import { IContent } from './constants';

type RightbarContent = keyof IContent | null;

export const setRightbarContent = createEvent<RightbarContent>();
export const $rightbarContent = createStore<RightbarContent>(null).on(
  setRightbarContent,
  (_, payload) => payload,
);
