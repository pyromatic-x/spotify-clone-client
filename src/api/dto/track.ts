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

  explicit: boolean;
  isAddedToLibrary: boolean;

  plays: number;
  duration: number;

  addedAt?: string;
}
