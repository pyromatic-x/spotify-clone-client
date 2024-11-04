import { AlbumDto } from './album';
import { TrackDto } from './track';

export interface ArtistDto {
  _id: string;
  name: string;
  cover: string;
  accent: string;
  _collection: 'artist';
}

export interface ArtistPageDataDto {
  meta: {
    _id: string;
    name: string;
    avatar: string;
    backdrop: string;
    accent: string;
    verified: boolean;
    listeners: number;
    aboutImage: number;
    likedTracksCount?: number;
    isFollowing: boolean;
  };

  tracks: Array<TrackDto>;
  albums: Array<AlbumDto>;
}
