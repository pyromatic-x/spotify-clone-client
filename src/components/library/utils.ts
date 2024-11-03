import dayjs from 'dayjs';
import { LibraryItemDto } from '../../api/types';
import { LibrarySortings } from './types';

const compareByName = (a: LibraryItemDto, b: LibraryItemDto): number => a.name.localeCompare(b.name);

function compare<T>(a: T, b: T, property: keyof T) {
  if (!a[property] && !b[property]) return 0;
  else if (!a[property]) return 1;
  else if (!b[property]) return -1;
  else if (a[property] > b[property]) return -1;
  else if (a[property] < b[property]) return 1;
  else return 0;
}

export function sortLibraryItems(items: Array<LibraryItemDto>, type: keyof typeof LibrarySortings): void {
  items.sort((a: any, b: any) => {
    const pin = compare<LibraryItemDto>(a, b, 'pin');
    if (pin !== 0) return pin;

    if (type === 'Alphabetical') {
      const alphabetical = compareByName(a, b);
      if (alphabetical !== 0) return alphabetical;
    } else if (type === 'Recently added') {
      const recentlyAdded = compare<LibraryItemDto>(a, b, 'addedAt');
      if (recentlyAdded !== 0) return recentlyAdded;
    } else if (type === 'Recents') {
      const lastPlayed = compare<LibraryItemDto>(a, b, 'lastPlayedAt');
      if (lastPlayed !== 0) return lastPlayed;
    }

    return 0;
  });
}

export function getDateDiff(date?: string) {
  if (!date) return '';

  try {
    new Date(date);
  } catch {
    return '';
  }

  const weeks = dayjs().diff(date, 'weeks');
  const days = dayjs().diff(date, 'days');
  const hours = dayjs().diff(date, 'hours');
  const minutes = dayjs().diff(date, 'minutes');

  const postfix = (val: number) => (val === 1 ? '' : 's');
  const format = (n: number, v: string) => `${n} ${v}${postfix(n)} ago`;

  if (weeks > 4) return dayjs(date).format('MMM D, YYYY');
  if (days >= 7) return format(weeks, 'week');
  if (hours > 24) return format(days, 'day');
  if (minutes > 60) return format(hours, 'hour');

  return format(minutes, 'minute');
}
