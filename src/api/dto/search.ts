import { ArtistDto } from './artist';
import { PlaylistDto } from './playlist';
import { TrackDto } from './track';
import { UserDto } from './user';

export interface SearchDto {
  artists?: ArtistDto;
  tracks?: TrackDto;
  playlists?: PlaylistDto;
  users?: UserDto;
}
