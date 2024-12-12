import { AuthorDto } from '.';
import { TrackDto } from './track';

type PlaylistStyling = 'lines' | 'wave';

export enum PlaylistTypesEnum {
  'public' = 'public',
  'private' = 'private',
  'likes' = 'likes',
  'personal-daily' = 'personal-daily',
  'personal-mix' = 'personal-mix',
}

export interface PlaylistMinifiedDto {
  _id: string;
  name: string;
  cover: string;
  type: string;
  accent: string;
  _collection: 'album';
  styling?: PlaylistStyling;
}

export interface PlaylistDto {
  _id: string;
  name: string;
  author: AuthorDto;
  styling: PlaylistStyling;
  cover: string;
  type: keyof typeof PlaylistTypesEnum;
  description?: string;
  accent: string;
  tracks?: Array<{
    _id: string;
    addedAt: string;
  }>;
  artists?: Array<{ _id: string; name: string }>;

  forYou: boolean;

  createdAt: string;

  _collection: 'album' | 'playlist' | 'artist';
}

export interface PlaylistPageDto {
  meta: Omit<PlaylistDto, 'createdAt' | 'tracks'> & {
    tracksCount: number;
    duration: number;
  };
  tracks: Array<TrackDto>;
}
