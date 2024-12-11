import { AuthorDto } from '.';
import { TrackDto } from './track';

export interface AlbumMinifiedDto {
  _id: string;
  name: string;
  cover: string;
  accent: 1;
  _collection: 'album';
}

export interface AlbumDto {
  _id: string;
  author: AuthorDto;
  coAuthors?: Array<AuthorDto>;
  name: string;
  type: 'single' | 'EP' | 'album';
  accent: string;
  cover: string;
  createdAt: string;
  _collection: 'album' | 'playlist' | 'artist';
}

export interface AlbumPageDataDto {
  meta: Omit<AlbumDto, 'createdAt'> & {
    tracksCount: number;
    duration: number;
  };

  tracks: Array<TrackDto>;

  moreByAuthor?: Array<AlbumDto>;
}
