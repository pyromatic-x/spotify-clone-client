import { createEffect, createEvent, createStore, sample } from 'effector';
import { LibraryUIConfig } from './constants';
import { LibraryCategories, LibrarySortings } from './types';
import { LibraryItemsDto } from '../../api/types';
import { API } from '../../api';
import { sortLibraryItems } from './utils';

export const reset = createEvent();

// #region items
export const getLibraryItems = createEvent();

export const $libraryItems = createStore<LibraryItemsDto | null>(null);
export const $libraryItemsDefault = createStore<LibraryItemsDto | null>(null);
export const $libraryItemsError = createStore<string | null>(null);

export const getLibraryItemsFx = createEffect<unknown, LibraryItemsDto, Error>(async () => {
  const { data } = await API.library.get();
  return data.map((t) => ({
    ...t,
    cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/b98e73f45eb766a8f989ffec41839492.jpg',
  }));
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
// #endregion items

// #region UI
export const toggleShadow = createEvent<boolean>();
export const changeWidth = createEvent<LibraryUIConfig>();

export const $UI = createStore<{
  shadow: boolean;
  width: { value: LibraryUIConfig; name: keyof typeof LibraryUIConfig };
}>({
  shadow: false,
  width: {
    value: LibraryUIConfig.default,
    name: LibraryUIConfig[LibraryUIConfig.default] as keyof typeof LibraryUIConfig,
  },
})
  .on(toggleShadow, (state, payload) => ({ ...state, shadow: payload }))
  .on(changeWidth, (state, payload) => ({
    ...state,
    width: { value: payload, name: LibraryUIConfig[payload] as keyof typeof LibraryUIConfig },
  }));

// #endregion

// #region filters
export const filter = createEvent<{
  search?: string;
  category?: keyof typeof LibraryCategories | null;
  sort?: keyof typeof LibrarySortings;
}>();
export const $filter = createStore<{
  search: string;
  category: keyof typeof LibraryCategories | null;
  sort: keyof typeof LibrarySortings;
}>({
  search: '',
  category: null,
  sort: 'Alphabetical',
}).on(filter, (state, payload) => ({ ...state, ...payload }));

sample({
  clock: filter,
  source: { $libraryItemsDefault, $filter },
  fn: ({ $libraryItemsDefault, $filter }) => {
    let items = [...$libraryItemsDefault!];

    const { search, category, sort } = $filter;

    if (search) {
      const regex = new RegExp(`${search}`, 'gi');
      items = items!.filter((t) => regex.test(t.name));
    }

    if (category) {
      items = items.filter((t) => t._collection === category);
    }

    if (sort) {
      sortLibraryItems(items, sort);
    }

    return items;
  },
  target: $libraryItems,
});
// #endregion

// $collapsed.watch((state) => {
//   if (state) filter({ search: '', category: null });
// });
