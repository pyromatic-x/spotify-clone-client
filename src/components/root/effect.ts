import { createEvent, createStore } from 'effector';

export const setOutletWidth = createEvent<number>();
export const $outletWidth = createStore(0).on(setOutletWidth, (_, payload) => payload);
