import { ArtistDto } from './artist';
import { PlaylistDto } from './playlist';

export interface UserDto {
  _id: string;
  username: string;
  avatar: string;
}

export interface UserPageDto {
  meta: UserDto & {
    followersCount?: number;
    followingCount?: number;
  };
  recentlyPlayedArtists: Array<ArtistDto>;
  playlists?: Array<PlaylistDto>;
  followers?: Array<UserDto>;
  following?: Array<UserDto>;
}
