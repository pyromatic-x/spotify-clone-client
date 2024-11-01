export interface ITrack {
  id: string;
  name: string;
  audio: string;
  liked: boolean;
  authors: Array<{
    id: string;
    name: string;
  }>;
  album: {
    id: string;
    type: 'single' | 'EP';
    image: string;
  };
  addedAt?: string;
  duration?: number;
  listenedCount?: string;
}

export interface ITrackPlayer extends ITrack {
  _current?: boolean;
  _initial_order: number;
}
