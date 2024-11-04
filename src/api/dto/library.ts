import { IsoDateString } from '.';

export type LibraryItemDto = {
  _id: string;
  _collection: 'album' | 'playlist' | 'artist';
  lastPlayedAt?: IsoDateString;
  addedAt: IsoDateString;
  cover: string;
  name: string;
  author?: string;
  pin?: IsoDateString;
  tracksCount?: number;
};

export type LibraryDto = Array<LibraryItemDto>;
