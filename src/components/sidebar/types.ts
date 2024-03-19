export enum Categories {
  "albums",
  "playlists",
  "artists",
}
export enum Sortings {
  "Recents",
  "Recently added",
  "Alphabetical",
  "Creator",
}

export type ItemType = {
  author?: string;
  title: string;
  subTitle: string;
  image: string;
  type: keyof typeof Categories;
};
