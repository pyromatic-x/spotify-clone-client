import { ItemType } from "./types";

const albums: Array<ItemType> = [
  {
    author: "Miyagi & Endspiel",
    title: "NARRATIVE",
    subTitle: "",
    image: "https://i1.sndcdn.com/artworks-Tm4yZyaauAoN1v0u-UowOOw-t500x500.jpg",
    type: "album",
  },
];
const playlists: Array<ItemType> = [];
const artists: Array<ItemType> = [];

export const items: Array<ItemType> = [...albums, ...playlists, ...artists];
