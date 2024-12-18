import { AlbumDto } from './album';
import { PlaylistDto } from './playlist';
import { TrackDto } from './track';

export interface ArtistDto {
  _id: string;
  name: string;
  cover: string;
  accent: string;
  _collection: 'artist';
}

export interface ArtistPageDto {
  meta: {
    _id: string;
    name: string;
    avatar: string;
    backdrop: string;

    verified: boolean;
    inLibrary: boolean;

    likedCount: number;
  };
  tracks: Array<TrackDto>;
  discography: Array<AlbumDto>;
  similar: Array<ArtistDto>;
  discovered: Array<PlaylistDto>;
  about: {
    image: string;
    monthly: string;
    description?: string;
  };
}

export interface ArtistBioDto {
  _id: string;
  about?: {
    bio: string;
    image?: string;
    by: string;
  };
  stats: {
    followers: string;
    listeners: {
      monthly: string;
      world: Array<{
        city: string;
        value: string;
      }>;
    };
  };
  links?: Array<{
    service: 'Twitter' | 'Facebook' | 'Instagram';
    link: string;
  }>;
}
