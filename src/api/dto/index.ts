export enum CollectionEnums {
  'album' = 'album',
  'playlist' = 'playlist',
  'artist' = 'artist',
  'user' = 'user',
}

export type AuthorDto = {
  _id: string;
  name: string;
  avatar: string;
};

export type IsoDateString = string & { format: 'yyyy-MM-ddTHH:mm:ss.SSSZ' };
