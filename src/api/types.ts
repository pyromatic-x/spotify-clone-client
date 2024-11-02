export enum CollectionEnums {
  'album' = 'album',
  'playlist' = 'playlist',
  'musician' = 'musician',
  'user' = 'user',
}

type IsoDateString = string & { format: 'yyyy-MM-ddTHH:mm:ss.SSSZ' };

export interface AuthUserResponse {
  _id: string;
  username: string;
  avatar: string;
}
export interface AuthUserParams {
  username: string;
  password: string;
}

export type LibraryItemsResponse = Array<{
  _id: string;
  type: Extract<CollectionEnums, 'album' | 'playlist' | 'musician'>;
  lastPlayedAt?: IsoDateString;
  addedAt: IsoDateString;
  cover: string;
  name: string;
  author?: string;
  pin?: IsoDateString;
  tracksCount?: number;
}>;
