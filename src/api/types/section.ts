import { IPlaylist } from './playlist';

export interface ISectionItem {
  id: string;
  name: string;
  image: string;
  type: 'artist' | 'playlist' | 'album' | 'profile';

  description?: string;
  headliners?: IPlaylist['headliners'];
  releasedAt?: string;
  by?: {
    id: string;
    name: string;
  };

  styles?: IPlaylist['styles'];
}

export interface ISection {
  title: string;
  link?: string;
  items: Array<ISectionItem>;
}
