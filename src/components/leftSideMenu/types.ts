export enum Categories {
  "album",
  "playlist",
  "artist",
}

export type ItemType = {
  author: string;
  title: string;
  subTitle: string;
  image: string;
  type: keyof typeof Categories;
};
