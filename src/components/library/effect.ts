import { createEffect, createEvent, createStore, sample } from 'effector';
import { libraryUIConfig } from './constants';
import { LibraryCategories, LibrarySortings } from './types';
import { LibraryItemsResponse } from '../../api/types';
import { API } from '../../api';
import { sortLibraryItems } from './utils';

export const reset = createEvent();

export const getLibraryItems = createEvent();

export const $libraryItems = createStore<LibraryItemsResponse | null>(null);
export const $libraryItemsDefault = createStore<LibraryItemsResponse | null>(null);
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
  target: [$libraryItems, $libraryItemsDefault],
});
sample({
  clock: getLibraryItemsFx.failData,
  fn: (e: any) => e?.message,
  target: $libraryItemsError,
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

export const changeSort = createEvent<keyof typeof LibrarySortings>();
export const $sort = createStore<keyof typeof LibrarySortings>('Alphabetical').on(
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

export const filter = createEvent<{ search?: string; category?: keyof typeof LibraryCategories | null }>();
export const $filter = createStore<{ search: string; category: keyof typeof LibraryCategories | null }>({
  search: '',
  category: null,
}).on(filter, (state, payload) => ({ ...state, ...payload }));

sample({
  clock: filter,
  source: { $libraryItemsDefault, $sort, $filter },
  fn: ({ $libraryItemsDefault, $sort, $filter }) => {
    let items = [...$libraryItemsDefault!];

    const { search, category } = $filter;

    if (search) {
      const regex = new RegExp(`${search}`, 'gi');
      items = items!.filter((t) => regex.test(t.name));
    }

    if (category) {
      items = items.filter((t) => t._collection === category);
    }

    if ($sort) {
      sortLibraryItems(items!, $sort);
    }

    return items;
  },
  target: $libraryItems,
});

// $collapsed.watch((state) => {
//   if (state) search(null);
// });
// // #endregion

// // #region sort
