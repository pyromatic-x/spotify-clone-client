import { createEvent, createStore, sample } from 'effector';
import { menuConfig } from './constants';
import { Categories, Sortings } from './types';
import { LIBRARY_IEMS } from '../../api/mock/library';
import { ILibrary } from '../../api/types/library';

export const reset = createEvent();

// #region items
export const $items = createStore<ILibrary>(LIBRARY_IEMS).on(reset, () => LIBRARY_IEMS);
// #endregion

// #region category
export const setCategory = createEvent<keyof typeof Categories | null>();
export const $category = createStore<keyof typeof Categories | null>(null);

sample({
  clock: setCategory,
  target: $category,
});
// #endregion

// #region shadow
export const setShadow = createEvent<boolean>();
export const $shadow = createStore(false).on(setShadow, (_, payload) => payload);
// #endregion

// #region menu width
export const changeMenuWidth = createEvent<number>();

export const $collapsed = createStore(false);
export const $expanded = createStore(false);
export const $width = createStore<number>(menuConfig.default).on(changeMenuWidth, (_, payload) => {
  const { minWidth, maxWidth, collapse } = menuConfig;

  if (payload <= collapse) return minWidth;
  if (payload >= maxWidth) return maxWidth;
  if (payload <= minWidth) return minWidth;

  return payload;
});

sample({
  clock: changeMenuWidth,
  fn: (state) => state <= menuConfig.collapse,
  target: $collapsed,
});
sample({
  clock: changeMenuWidth,
  fn: (state) => state >= menuConfig.expand,
  target: $expanded,
});
//#endregion

// #region search
export const search = createEvent<string | null>();
export const $search = createStore<string | null>(null);

sample({
  clock: search,
  fn: (searchValue: string | null) => {
    const category = $category.getState();

    if (!category && !searchValue) return LIBRARY_IEMS;

    const items = category ? LIBRARY_IEMS.filter((t) => t.type === category) : LIBRARY_IEMS;

    if (!searchValue) return items;

    const regex = new RegExp(`${searchValue}`, 'gi');
    return items.filter((t) => regex.test(t.name) || regex.test(t.by || ''));
  },
  target: $items,
});

sample({
  clock: search,
  target: $search,
});

sample({
  clock: setCategory,
  fn: () => null,
  target: search,
});

$collapsed.watch((state) => {
  if (state) search(null);
});
// #endregion

// #region sort
export const changeSort = createEvent<keyof typeof Sortings>();
export const $sort = createStore(Sortings[0]).on(changeSort, (_, payload) => payload);
