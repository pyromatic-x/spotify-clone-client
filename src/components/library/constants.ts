import { GridView as GridIcon, List as ListIcon, Menu as MenuIcon } from '@mui/icons-material';
import { LibraryView } from './types';

export enum LibraryUIConfig {
  'default' = 420,
  'min' = 78,
  'max' = 590,
}

export const ViewIcons = {
  [LibraryView['Compact']]: MenuIcon,
  [LibraryView['List']]: ListIcon,
  [LibraryView['Grid']]: GridIcon,
};
