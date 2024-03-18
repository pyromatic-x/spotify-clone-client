import { createEvent, createStore } from "effector";
import { items } from "./constants";
import { Categories, ItemType } from "./types";

export const search = createEvent<string>();
export const reset = createEvent();
export const toggleShadow = createEvent();
export const toggleMenu = createEvent();

export const $items = createStore<Array<ItemType>>(items).on(reset, () => items);
export const $showShadow = createStore(false).on(toggleShadow, (state) => !state);
export const $collapsed = createStore(false).on(toggleMenu, (state) => !state);
export const $category = createStore<keyof typeof Categories | null>(null);
