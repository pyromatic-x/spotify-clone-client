import theme from '../../theme';
import { faker } from '@faker-js/faker';
import { ISectionItem } from '../types/section';
import { IPlaylistRecommended } from '../types/playlist';
import { capitalizeFirstLetter, hexToRgbA, randomColor } from '../../utils/strings';
import { ILibrary, ILibraryItem } from '../types/library';
import {
  IBrowse,
  IBrowseAlbums,
  IBrowseArtists,
  IBrowseFeaturing,
  IBrowsePlaylists,
  IBrowseTopResult,
  IBrowseTracks,
  IBrowseUsers,
} from '../types/browse';

export const generateRecommended = (): Array<IPlaylistRecommended> => {
  const liked = {
    id: crypto.randomUUID(),
    name: 'Liked Songs',
    image: 'https://i.scdn.co/image/ab67706c0000da849d25907759522a25b86a3033',
    styles: {
      color: theme.palette.iris,
    },
  };
  const random = [...Array(7).keys()].map((_, index) => ({
    id: crypto.randomUUID(),
    name: 'Daily Mix ' + (index + 1),
    image: faker.image.url({ width: 160, height: 160 }),
    styles: {
      variant: 'curves',
      color: randomColor(),
    },
  }));

  return [liked, ...random];
};

const generateArtist = (): ISectionItem => ({
  id: crypto.randomUUID(),
  name: faker.internet.userName(),
  image: faker.image.avatar(),
  type: 'artist',
});

const generatePlaylist = (): ISectionItem => {
  const headlinersOrBy = Math.random() > 0.5 ? 'headliners' : 'by';

  return {
    id: crypto.randomUUID(),
    image: faker.image.url({ width: 200, height: 200 }),
    name: capitalizeFirstLetter(faker.word.adjective({ length: { min: 3, max: 10 } })) + ' Mix',
    ...(headlinersOrBy === 'headliners'
      ? {
          headliners: [...Array(2).keys()].map(() => ({
            id: crypto.randomUUID(),
            name: faker.internet.userName(),
          })),
        }
      : {
          by: {
            id: crypto.randomUUID(),
            name: faker.internet.userName(),
          },
        }),
    styles: {
      variant: 'lines',
      color: randomColor(),
    },
    type: 'playlist',
  };
};

export const generateAlbum = (): ISectionItem => ({
  id: crypto.randomUUID(),
  image: faker.image.url({ width: 200, height: 200 }),
  name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
  releasedAt: faker.date.past({ years: 20 }).toISOString(),
  by: {
    id: crypto.randomUUID(),
    name: faker.internet.userName(),
  },
  type: 'album',
});

export const generateSectionItems = (type: 'artist' | 'playlist' | 'album' | 'mix') => {
  const base = [...Array(10).keys()];
  const funcs = [generateArtist, generatePlaylist, generateAlbum];

  return base.map(() => {
    if (type === 'artist') return generateArtist();
    if (type === 'playlist') return generatePlaylist();
    if (type === 'album') return generateAlbum();
    if (type === 'mix') return funcs[Math.floor(Math.random() * funcs.length)]();
  }) as Array<ISectionItem>;
};

export function generateBrowseCategories() {
  return [...Array(68).keys()].map(() => ({
    id: crypto.randomUUID(),
    title: faker.music.genre(),
    image: faker.image.url({ width: 200, height: 200 }),
    color: hexToRgbA(randomColor(), 0.5),
  }));
}

export function generateLibraryItems(): ILibrary {
  const base = [...Array(20).keys()];

  const artists = base.map(
    (): ILibraryItem => ({
      id: crypto.randomUUID(),
      name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
      image: faker.image.url({ width: 160, height: 160 }),
      addedAt: faker.date.past({ years: 1 }).toISOString(),
      playedAt: faker.date.recent({ days: 60 }).toISOString(),
      type: 'artist',
    }),
  );

  const playlists = base.map(
    (): ILibraryItem => ({
      id: crypto.randomUUID(),
      name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
      image: faker.image.url({ width: 160, height: 160 }),
      addedAt: faker.date.past({ years: 1 }).toISOString(),
      playedAt: faker.date.recent({ days: 60 }).toISOString(),
      by: faker.internet.userName(),
      type: 'playlist',
    }),
  );

  const albums = base.map(
    (): ILibraryItem => ({
      id: crypto.randomUUID(),
      name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
      image: faker.image.url({ width: 160, height: 160 }),
      addedAt: faker.date.past({ years: 1 }).toISOString(),
      playedAt: faker.date.recent({ days: 60 }).toISOString(),
      by: faker.internet.userName(),
      type: 'album',
    }),
  );

  return [...artists, ...playlists, ...albums].sort((a, b) =>
    a.playedAt > b.playedAt ? -1 : a.playedAt < b.playedAt ? 1 : 0,
  );
}

export function generateSearchItems(): IBrowse {
  const section_base = [...Array(10).keys()];
  const tracks_base = [...Array(4).keys()];

  const top: IBrowseTopResult = {
    id: crypto.randomUUID(),
    name: faker.internet.userName(),
    image: faker.image.avatar(),
    type: 'artist',
  };

  const tracks: IBrowseTracks = tracks_base.map(() => ({
    id: crypto.randomUUID(),
    name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
    image: faker.image.url({ width: 160, height: 160 }),
    audio: '',
    liked: faker.datatype.boolean(),
    authors: [
      {
        id: crypto.randomUUID(),
        name: faker.internet.userName(),
      },
    ],
  }));

  const featuring: IBrowseFeaturing = section_base.map(() => ({
    id: crypto.randomUUID(),
    name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
    image: faker.image.url({ width: 160, height: 160 }),
    by: {
      id: crypto.randomUUID(),
      name: 'Spotify',
    },
    type: 'playlist',
  }));

  const users: IBrowseUsers = section_base.map(() => ({
    id: crypto.randomUUID(),
    name: capitalizeFirstLetter(faker.word.verb({ length: { min: 6, max: 18 } })),
    image: faker.image.url({ width: 160, height: 160 }),
    type: 'profile',
  }));

  const artists: IBrowseArtists = section_base.map(() => generateArtist());
  const playlists: IBrowsePlaylists = section_base.map(() => generatePlaylist());
  const albums: IBrowseAlbums = section_base.map(() => generateAlbum());

  return {
    top,
    tracks,
    featuring,
    artists,
    playlists,
    albums,
    users,
  };
}
