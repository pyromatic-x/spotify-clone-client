import { createEvent, createStore } from 'effector';
import { BROWSE_CATEGORIES, BROWSE_RECENT_SEARCHES } from '../../api/mock/browse';

export const search = createEvent<string>();
export const $search = createStore(null);

export const getRecentSearches = createEvent();
export const $recentSearches = createStore(BROWSE_RECENT_SEARCHES);

export const getBrowseCategories = createEvent();
export const $browseCategories = createStore(BROWSE_CATEGORIES);
