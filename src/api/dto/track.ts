import { AuthorDto } from '.';

export interface TrackDto {
  _id: string;
  name: string;
  url: string;

  author: AuthorDto;

  album: {
    _id: string;
    name: string;
    cover: string;
  };

  albumOrder: number;

  explicit: boolean;
  inLibrary: boolean;

  plays: number;
  duration: number;

  addedAt?: string;
}
