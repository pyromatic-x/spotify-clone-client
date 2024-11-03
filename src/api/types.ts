export enum CollectionEnums {
  'album' = 'album',
  'playlist' = 'playlist',
  'artist' = 'artist',
  'user' = 'user',
}

type IsoDateString = string & { format: 'yyyy-MM-ddTHH:mm:ss.SSSZ' };

export interface AuthUserDto {
  _id: string;
  username: string;
  avatar: string;
}
export interface AuthUserPayload {
  username: string;
  password: string;
}

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

export type LibraryItemsDto = Array<LibraryItemDto>;
