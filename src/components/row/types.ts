import { AuthorDto } from '../../api/dto';

export type TItemCommonFields = {
  _id: string;
  name: string;
  cover: string;
  _collection: 'album' | 'playlist' | 'artist';
  description?: string;
  author?: AuthorDto;
};
