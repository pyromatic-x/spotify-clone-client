import { CollectionEnums } from '.';

export interface FollowPayload {
  target: string;
  _collection: keyof typeof CollectionEnums;
}
export type IsFollowingDto = boolean;
