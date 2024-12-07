export enum LibraryCategories {
  'Playlists' = 'playlist',
  'Albums' = 'album',
  'Artists' = 'artist',
}

export enum LibrarySortings {
  'Recents' = 'Recents',
  'Recently added' = 'Recently added',
  'Alphabetical' = 'Alphabetical',
}

export enum LibraryView {
  'Compact' = 'Compact',
  'List' = 'List',
  'Grid' = 'Grid',
}

type TView = {
  type: keyof typeof LibraryView;
  gridSize?: number;
};

export interface ILibraryFilter {
  search?: string;
  category: LibraryCategories | null;
  sort: LibrarySortings;
  view: TView;
}

export type ILibraryFilterPayload = Partial<ILibraryFilter>;
