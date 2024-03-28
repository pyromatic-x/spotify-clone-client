import { createEvent, createStore } from 'effector';

export const setOutletWidth = createEvent<number>();
export const $outletWidth = createStore(0).on(setOutletWidth, (_, payload) => payload);

const SECTION_ITEMS_COUNT_BREAKPOINTS = [
  { bp: 1840, count: 10 },
  { bp: 1660, count: 9 },
  { bp: 1480, count: 8 },
  { bp: 1300, count: 7 },
  { bp: 1100, count: 6 },
  { bp: 930, count: 5 },
  { bp: 740, count: 4 },
  { bp: 1, count: 3 },
];

export const setSectionItemsCountByWidth = createEvent<number>();
export const $sectionItemsCount = createStore(1).on(setSectionItemsCountByWidth, (state, width) => {
  const { count } = SECTION_ITEMS_COUNT_BREAKPOINTS.find((t) => t.bp < width)!;

  if (state === count) return state;

  return count;
});
