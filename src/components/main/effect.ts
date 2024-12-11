import { createEvent, createStore } from 'effector';

export const changeMainWidth = createEvent<number>();
export const $mainWidth = createStore<number>(1980).on(changeMainWidth, (_, payload) => payload);
