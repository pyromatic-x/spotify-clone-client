export interface IAlbum {
  id: string;
  name: string;
  image: string;
  author: {
    id: string;
    name: string;
  };
  by: {
    id: string;
    avatar: string;
    name: string;
  };
  release: {
    at: string;
    label: string;
  };
  type: 'album';
}

export type IAlbumLibrary = Pick<IAlbum, 'id' | 'name' | 'image' | 'type'> & {
  by: string;
  addedAt: string;
  playedAt: string;
};
export type IAlbumCard = Pick<IAlbum, 'id' | 'name' | 'image' | 'by' | 'type'> & {
  releasedAt: string;
};
