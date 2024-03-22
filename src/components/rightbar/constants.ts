import { Box, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/types';

export interface IContent {
  readonly QUEUE: OverridableComponent<any>;
  readonly NOW_PLAYING: OverridableComponent<any>;
}

export const Components: IContent = {
  QUEUE: Typography,
  NOW_PLAYING: Box,
};
