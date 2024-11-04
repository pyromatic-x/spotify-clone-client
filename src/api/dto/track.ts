import { AuthorDto } from '.';

export interface TrackDto {
  _id: string;
  name: string;
  audio: string;
  cover: string;

  author: AuthorDto;
  coAuthors?: Array<AuthorDto>;

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
