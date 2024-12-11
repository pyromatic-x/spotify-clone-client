import { createEffect, createEvent, createStore, sample } from 'effector';
import { LibraryUIConfig } from './constants';
import { ILibraryFilter, ILibraryFilterPayload, LibrarySortings, LibraryView } from './types';
import { API } from '../../api';
import { sortLibraryItems } from './utils';
import { loginFx } from '../auth/effect';
import { LibraryDto } from '../../api/dto/library';

export const reset = createEvent();

// #region items
export const $libraryItems = createStore<LibraryDto | null>(null);
export const $libraryItemsDefault = createStore<LibraryDto | null>(null);
export const $libraryItemsError = createStore<string | null>(null);

export const getLibraryItemsFx = createEffect<unknown, LibraryDto, Error>(async () => {
  const { data } = await API.library.get();
  return data;
});

sample({
  clock: loginFx.doneData,
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
export const filter = createEvent<ILibraryFilterPayload>();
export const $filter = createStore<ILibraryFilter>({
  search: '',
  category: null,
  sort: LibrarySortings['Alphabetical'],
  view: {
    type: LibraryView['List'],
    gridSize: 50,
  },
}).on(filter, (state, payload) => {
  if (payload.view) {
    return { ...state, view: { ...state.view, ...payload.view } };
  }
  return { ...state, ...payload };
});

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
