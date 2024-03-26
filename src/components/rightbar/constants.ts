import { OverridableComponent } from '@mui/types';
import Queue from '../queue';
import NowPlaying from '../nowPlaying';

export interface IContentComponent {
  COMPONENT: OverridableComponent<any>;
  SCROLLABLE: boolean;
}
export interface IContent {
  readonly QUEUE: IContentComponent;
  readonly NOW_PLAYING: IContentComponent;
}

export const Components: IContent = {
  QUEUE: {
    COMPONENT: Queue,
    SCROLLABLE: false,
  },
  NOW_PLAYING: {
    COMPONENT: NowPlaying,
    SCROLLABLE: true,
  },
};
