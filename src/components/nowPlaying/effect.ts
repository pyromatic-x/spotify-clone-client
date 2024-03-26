import { createEvent, createStore } from 'effector';
import { MOCK_NOW_PLAYING } from './mock';

export const getNowPlaying = createEvent<string>();
export const $nowPlaying = createStore(MOCK_NOW_PLAYING);
