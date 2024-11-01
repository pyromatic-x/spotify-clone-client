import { IPlaylistCard } from './playlist';

export interface IUser {
  id: string;
  name: string;
  image: string;
  backdrop: string;
  followersCount: number;
  followingCount: number;
  playlists?: Array<IPlaylistCard>;
  type: 'profile';
}

export type IUserCard = Pick<IUser, 'id' | 'name' | 'image' | 'type'>;
