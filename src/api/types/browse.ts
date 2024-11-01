import { IArtistCard } from './artist';
import { ISectionItem } from './section';
import { ITrack } from './track';
import { IUserCard } from './user';

export type IBrowseCategory = {
  id: string;
  title: string;
  color: string;
  image: string;
};

export type IBrowseTopResult = IArtistCard;
export type IBrowseTracks = Array<Omit<ITrack, 'album' | 'addedAt'>>;
export type IBrowseFeaturing = Array<ISectionItem>;
export type IBrowseArtists = Array<ISectionItem>;
export type IBrowseAlbums = Array<ISectionItem>;
export type IBrowsePlaylists = Array<ISectionItem>;
export type IBrowseUsers = Array<IUserCard>;

export type IBrowse = Partial<{
  top: IBrowseTopResult;
  tracks: IBrowseTracks;
  featuring: IBrowseFeaturing;
  artists: IBrowseArtists;
  albums: IBrowseAlbums;
  playlists: IBrowsePlaylists;
  users: IBrowseUsers;
}>;
