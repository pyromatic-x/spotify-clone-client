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

export type LibraryCheckPayload = string;
export type LibraryCheckResponse = boolean;

export type LibraryAddPayload = {
  type: 'album' | 'playlist' | 'artist';
  target: string;
};
export type LibraryRemovePayload = LibraryAddPayload;
export type LibraryAddResponse = string;
export type LibraryRemoveResponse = string;
