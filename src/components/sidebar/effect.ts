import { createEvent, createStore, sample } from 'effector';
import { items as defaultItems, menuConfig } from './constants';
import { Categories, ItemType, Sortings } from './types';

export const reset = createEvent();

// #region items
export const $items = createStore<Array<ItemType>>(defaultItems).on(reset, () => defaultItems);
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
export const $width = createStore<number>(menuConfig.defaultWidth).on(changeMenuWidth, (state, payload) => {
  const { minWidth, maxWidth, collapseBreakpoint } = menuConfig;

  if (payload <= collapseBreakpoint) return minWidth;
  if (payload >= maxWidth) return maxWidth;
  if (payload <= minWidth) return minWidth;

  return payload;
});

sample({
  clock: changeMenuWidth,
  fn: (state) => state <= menuConfig.collapseBreakpoint,
  target: $collapsed,
});
sample({
  clock: changeMenuWidth,
  fn: (state) => state >= menuConfig.expandedViewBreakpoint,
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

    if (!category && !searchValue) return defaultItems;

    const items = category ? defaultItems.filter((t) => t.type === category) : defaultItems;

    if (!searchValue) return items;

    const regex = new RegExp(`${searchValue}`, 'gi');
    return items.filter(
      (t) => regex.test(t.title) || regex.test(t.subTitle) || regex.test(t.author as string),
    );
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

// sample({
//   clock: sort,
//   fn: (state) => {
//     // sort items
//   },
//   target: $items,
// })
// #endregion
