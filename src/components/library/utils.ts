import { LibraryItemsResponse } from '../../api/types';
import { LibrarySortings } from './types';

type LibraryItem = LibraryItemsResponse[0];

const compareByName = (a: LibraryItem, b: LibraryItem): number => a.name.localeCompare(b.name);

function compare(a: LibraryItem, b: LibraryItem, property: 'pin' | 'lastPlayedAt' | 'addedAt') {
  if (!a[property] && !b[property]) return 0;
  else if (!a[property]) return 1;
  else if (!b[property]) return -1;
  else if (a[property] > b[property]) return -1;
  else if (a[property] < b[property]) return 1;
  else return 0;
}

export function sortLibraryItems(items: Array<LibraryItem>, type: keyof typeof LibrarySortings): void {
  items.sort((a: any, b: any) => {
    const pin = compare(a, b, 'pin');
    if (pin !== 0) return pin;

    if (type === 'Alphabetical') {
      const alphabetical = compareByName(a, b);
      if (alphabetical !== 0) return alphabetical;
    } else if (type === 'Recently added') {
      const recentlyAdded = compare(a, b, 'addedAt');
      if (recentlyAdded !== 0) return recentlyAdded;
    } else if (type === 'Recents') {
      const lastPlayed = compare(a, b, 'lastPlayedAt');
      if (lastPlayed !== 0) return lastPlayed;
    }

    return 0;
  });
}
