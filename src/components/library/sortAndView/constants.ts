import { GridView as GridIcon, List as ListIcon, Menu as CompactIcon } from '@mui/icons-material';
import { IPopoverItem } from '../../popover/list/types';
import { filter } from '../effect';
import { LibrarySortings, LibraryView } from '../types';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import LibrarySortAndViewSlider from './GridSlider';

type ViewIconType = OverridableComponent<SvgIconTypeMap<object, 'svg'>>;

const viewIcons: Record<string, ViewIconType> = {
  [LibraryView['Compact']]: CompactIcon,
  [LibraryView['List']]: ListIcon,
  [LibraryView['Grid']]: GridIcon,
};

export const getSortAndViewItems = ({
  sort,
  view,
}: {
  sort: LibrarySortings;
  view: keyof typeof LibraryView;
}): Array<IPopoverItem> => [
  { heading: 'Sort by' },
  ...Object.keys(LibrarySortings).map(
    (s) =>
      ({
        label: s,
        active: s === sort,
        onClick: () => {
          filter({ sort: s as LibrarySortings });
        },
      }) as IPopoverItem,
  ),
  { heading: 'View as' },
  ...Object.keys(LibraryView).map(
    (v) =>
      ({
        label: v,
        active: v === view,
        icons: {
          left: viewIcons[v as LibraryView],
        },
        onClick: () => {
          filter({ view: { type: v as LibraryView } });
        },
      }) as IPopoverItem,
  ),
  ...(view === LibraryView['Grid']
    ? [
        {
          element: LibrarySortAndViewSlider,
        },
      ]
    : []),
];
