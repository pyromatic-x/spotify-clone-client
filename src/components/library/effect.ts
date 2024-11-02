import { createEffect, createEvent, createStore, sample } from 'effector';
import { libraryUIConfig } from './constants';
import { LibraryCategories, LibrarySortings } from './types';
import { LibraryItemsResponse } from '../../api/types';
import { API } from '../../api';
import { sortLibraryItems } from './utils';

export const reset = createEvent();

export const getLibraryItems = createEvent();
export const $libraryItems = createStore<LibraryItemsResponse | null>(null);
export const $libraryItemsError = createStore<string | null>(null);
export const getLibraryItemsFx = createEffect<unknown, LibraryItemsResponse, Error>(async () => {
  const { data } = await API.library.get();
  return data;
});

sample({
  clock: getLibraryItems,
  target: getLibraryItemsFx,
});

sample({
  clock: getLibraryItemsFx.doneData,
  target: $libraryItems,
});
sample({
  clock: getLibraryItemsFx.failData,
  fn: (e: any) => e?.message,
  target: $libraryItemsError,
});

export const changeCategory = createEvent<keyof typeof LibraryCategories | null>();
export const $category = createStore<keyof typeof LibraryCategories | null>(null).on(
  changeCategory,
  (_, payload) => payload,
);

export const changeSort = createEvent<keyof typeof LibrarySortings>();
export const $sort = createStore(LibrarySortings[LibrarySortings.Alphabetical]).on(
  changeSort,
  (_, payload) => payload,
);

sample({
  clock: changeSort,
  source: $libraryItems,
  fn: (items, newSort) => {
    sortLibraryItems(items!, newSort);
    return items;
  },
  target: $libraryItems,
});

export const toggleShadow = createEvent<boolean>();
export const $shadow = createStore(false).on(toggleShadow, (_, payload) => payload);

export const changeWidth = createEvent<number>();

export const $collapsed = createStore(false);
export const $expanded = createStore(false);
export const $width = createStore<number>(libraryUIConfig.default).on(changeWidth, (_, payload) => {
  const { minWidth, maxWidth, collapse } = libraryUIConfig;

  if (payload <= collapse) return minWidth;
  if (payload >= maxWidth) return maxWidth;
  if (payload <= minWidth) return minWidth;

  return payload;
});

sample({
  clock: changeWidth,
  fn: (state) => state <= libraryUIConfig.collapse,
  target: $collapsed,
});
sample({
  clock: changeWidth,
  fn: (state) => state >= libraryUIConfig.expand,
  target: $expanded,
});

export const search = createEvent<string | null>();
export const $search = createStore<string | null>(null);

// sample({
//   clock: search,
//   fn: (searchValue: string | null) => {
//     const category = $category.getState();

//     if (!category && !searchValue) return LIBRARY_IEMS;

//     const items = category ? LIBRARY_IEMS.filter((t) => t.type === category) : LIBRARY_IEMS;

//     if (!searchValue) return items;

//     const regex = new RegExp(`${searchValue}`, 'gi');
//     return items.filter((t) => regex.test(t.name) || regex.test(t.by || ''));
//   },
//   target: $items,
// });

// sample({
//   clock: search,
//   target: $search,
// });

// sample({
//   clock: setCategory,
//   fn: () => null,
//   target: search,
// });

// $collapsed.watch((state) => {
//   if (state) search(null);
// });
// // #endregion

// // #region sort
