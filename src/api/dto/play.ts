import { TrackDto } from './track';

export interface PlayDto {
  _collection: 'album' | 'playlist' | 'artist';
  target: string;
  name: string;
  tracks: Array<TrackDto>;
}
export interface PlayDtoPayload {
  type: 'album' | 'playlist' | 'artist';
  _id: string;
}
