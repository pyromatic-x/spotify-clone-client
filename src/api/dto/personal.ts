import { AlbumDto } from './album';
import { ArtistDto } from './artist';
import { PlaylistDto, PlaylistTypesEnum } from './playlist';

export interface PersonalFeaturedDto {
  _id: string;
  name: string;
  cover?: string;
  avatar?: string;
  type?: keyof typeof PlaylistTypesEnum;
  _collection: 'artist' | 'playlist' | 'album';
}

export type PersonalDto = {
  featured?: Array<PersonalFeaturedDto>;
  forYou: Array<PlaylistDto>;
  mixes: Array<PlaylistDto>;
  recently: Array<PlaylistDto | AlbumDto | ArtistDto>;
  favoriteArtists: Array<ArtistDto>;
  albumsByFavoriteArtists: Array<AlbumDto>;
};
