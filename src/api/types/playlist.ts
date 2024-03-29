import { ITrack } from './track';

export interface IPlaylist {
  id: string;
  name: string;
  image: string;
  description?: string;
  tracks: Array<ITrack>;
  headliners: Array<{
    id: string;
    name: string;
  }>;
  tracksCount: number;
  likesCount: number;
  styles?: {
    variant?: 'lines' | 'curves';
    color: string;
  };
  by?: {
    id: string;
    avatar: string;
    name: string;
  };
  type: 'playlist';
}

export type IPlaylistLibrary = Pick<IPlaylist, 'id' | 'name' | 'image' | 'type'> & {
  by: string;
  addedAt: string;
  playedAt: string;
};
export type IPlaylistCard = Omit<IPlaylist, 'tracks' | 'tracksCount' | 'likesCount' | 'by'>;
export type IPlaylistRecommended = Omit<IPlaylistCard, 'headliners' | 'description' | 'type'>;
