import { IPlaylistRecommended } from '../types/playlist';
import { ISection } from '../types/section';
import { generateRecommended, generateSectionItems } from './generator';

export const HOME_RECOMMENDED: Array<IPlaylistRecommended> = generateRecommended();

export const HOME_SECTIONS: Array<ISection> = [
  {
    title: 'Made For You',
    items: generateSectionItems('playlist'),
  },
  {
    title: 'Your Top Mixes',
    items: generateSectionItems('playlist'),
  },
  {
    title: 'Popular In Your Country',
    items: generateSectionItems('playlist'),
  },
  {
    title: 'Your Favorite Artists',
    items: generateSectionItems('artist'),
  },
  {
    title: 'Most Known Albums',
    items: generateSectionItems('album'),
  },
];
