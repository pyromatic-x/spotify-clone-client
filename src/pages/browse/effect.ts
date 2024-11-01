import { createEffect, createEvent, createStore, sample } from 'effector';
import { BROWSE_CATEGORIES, BROWSE_RECENT_SEARCHES, BROWSE_SEARCH } from '../../api/mock/browse';
import { IBrowse } from '../../api/types/browse';
import { reset } from 'patronum';

export const clearSearchResults = createEvent();

export const search = createEvent<string>();
export const $search = createStore<IBrowse | null>(null);
export const searchFx = createEffect(async () => BROWSE_SEARCH);

sample({
  clock: search,
  target: searchFx,
});
sample({
  clock: searchFx.doneData,
  target: $search,
});

export const getRecentSearches = createEvent();
export const $recentSearches = createStore(BROWSE_RECENT_SEARCHES);

export const getBrowseCategories = createEvent();
export const $browseCategories = createStore(BROWSE_CATEGORIES);

reset({
  clock: clearSearchResults,
  target: $search,
});
