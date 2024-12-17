import { CollectionEnums } from '../../../api/dto';
import { TrackDto } from '../../../api/dto/track';

export interface TracksTableProps {
  tracks: Array<TrackDto>;
  source: {
    _id: string;
    type: Extract<keyof typeof CollectionEnums, 'album' | 'playlist'>;
  };
}
