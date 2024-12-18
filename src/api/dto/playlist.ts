import { AuthorDto } from '.';
import { TrackDto } from './track';

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
}

export interface PlaylistMinifiedByTrackDto extends PlaylistMinifiedDto {
  trackInPlaylist: boolean;
}

export interface PlaylistDto {
  _id: string;
  name: string;
  author: AuthorDto;
  cover: string;
  type: keyof typeof PlaylistTypesEnum;
  description?: string;
  accent: string;
  tracks?: Array<{
    _id: string;
    addedAt: string;
  }>;
  // artists?: Array<{ _id: string; name: string }>; // REMOVE FROM BACKEND

  forYou: boolean; // WHY ???

  createdAt?: string;

  _collection: 'album' | 'playlist' | 'artist';
}

export interface PlaylistPageDto {
  meta: {
    _id: string;
    name: string;
    author: AuthorDto;
    cover: string;
    type: keyof typeof PlaylistTypesEnum;
    accent?: string;
    createdAt?: string;
    tracksCount: number;
    duration: number;
    inLibrary: boolean;
    description?: string;
  };
  tracks: Array<TrackDto>;
}

export interface HandleTrackInPlaylistPaylodDto {
  trackId: string;
  playlists: Array<{ id: string; status: 'add' | 'remove' }>;
}
