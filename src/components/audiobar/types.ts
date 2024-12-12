import { PlayDto, PlayDtoPayload } from '../../api/dto/play';

export enum RepeatVariants {
  'DISABLED' = 'Enable repeat',
  'QUEUE' = 'Enable repeat one',
  'TRACK' = 'Disable repeat',
}

export type TQueue = PlayDto & {
  current: number;
  currentBeforeShuffle?: number;
  initialTracks: PlayDto['tracks'];
  shuffled: boolean;
  repeat: keyof typeof RepeatVariants;
};

export type TChangeQueue = PlayDtoPayload & { index?: number };
