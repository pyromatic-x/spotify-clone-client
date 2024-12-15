import { createEffect, createEvent, createStore, sample } from 'effector';
import { LibraryUIConfig } from './constants';
import { ILibraryFilter, ILibraryFilterPayload, LibrarySortings, LibraryView } from './types';
import { API } from '../../api';
import { sortLibraryItems } from './utils';
import { LibraryDto } from '../../api/dto/library';

export const reset = createEvent();

// #region items
const getLibraryItems = async () => (await API.library.get()).data;

export const refreshLibrary = createEvent();
export const getLibrary = createEvent();
const filterLibrary = createEvent<ILibraryFilterPayload>();

export const $library = createStore<LibraryDto | null>(null);
export const $libraryDefault = createStore<LibraryDto | null>(null);

export const refreshLibraryFx = createEffect<unknown, LibraryDto, Error>(getLibraryItems);
export const getLibraryItemsFx = createEffect<unknown, LibraryDto, Error>(getLibraryItems);

sample({
  clock: refreshLibrary,
  target: refreshLibraryFx,
});
sample({
  clock: refreshLibraryFx.doneData,
  target: [$library, $libraryDefault],
});

sample({
  clock: getLibrary,
  target: getLibraryItemsFx,
});
sample({
  clock: getLibraryItemsFx.doneData,
  target: [$library, $libraryDefault],
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
  source: $filter,
  fn: (filter, payload) => {
    if (payload.view) {
      return { ...filter, view: { ...filter.view, ...payload.view } };
    }
    return { ...filter, ...payload };
  },
  target: [$filter, filterLibrary],
});

sample({
  clock: filterLibrary,
  source: $libraryDefault,
  fn: (library, filter: ILibraryFilterPayload) => {
    if (!library) return null;

    let items = [...library];

    const { search, category, sort } = filter;

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
  target: $library,
});
// #endregion
