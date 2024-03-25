import { Box } from '@mui/material';
import { OverridableComponent } from '@mui/types';
import Queue from '../queue';

export interface IContent {
  readonly QUEUE: OverridableComponent<any>;
  readonly NOW_PLAYING: OverridableComponent<any>;
}

export const Components: IContent = {
  QUEUE: Queue,
  NOW_PLAYING: Box,
};
