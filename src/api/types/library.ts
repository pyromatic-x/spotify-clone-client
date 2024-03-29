export type ILibrary = Array<ILibraryItem>;

export interface ILibraryItem {
  id: string;
  name: string;
  image: string;
  addedAt: string;
  playedAt: string;
  by?: string;
  type: 'artist' | 'playlist' | 'album';
}
