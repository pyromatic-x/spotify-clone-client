import { randomColor } from '../../utils/strings';

export const recommended: Array<ISectionItem> = [
  {
    id: crypto.randomUUID(),
    title: 'Discover Weekly',
    image: {
      src: 'https://www.graphicdesignforum.com/uploads/default/original/2X/d/d3c4e744046205a49d06beb874df3b39da7c9c73.jpeg',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Daily Mix 1',
    image: {
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pink-cloud-cd-cover-music-design-template-258c703e9959b4635649e3944488c688_screen.jpg?ts=1631060402',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Daily Mix 4',
    image: {
      src: 'https://marketplace.canva.com/EAEqlr422aw/1/0/800w/canva-falling-modern-aesthetic-music-album-cover-u8bK7emg80A.jpg',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Daily Mix 5',
    image: {
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pink-cloud-cd-cover-music-design-template-258c703e9959b4635649e3944488c688_screen.jpg?ts=1631060402',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Daily Mix 6',
    image: {
      src: 'https://marketplace.canva.com/EAEqlr422aw/1/0/800w/canva-falling-modern-aesthetic-music-album-cover-u8bK7emg80A.jpg',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Release Radar',
    image: {
      src: 'https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Moody Mix',
    image: {
      src: 'https://www.adobe.com/express/create/cover/media_1bcba2af87ed5daee44370e652ca6b5ec254d399a.jpeg?width=750&format=jpeg&optimize=medium',
      type: 'square',
      style: 'curves',
    },
    color: randomColor(),
  },
];

export const homeSections: Array<ISection> = [
  {
    title: 'Made For You',
    items: [
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://i.discogs.com/DwEqu87nYO9pnOkphaRbUnCleNbCZnoMs7Kyy_GCUa0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDI2/MDMtMTY3MzAxMTE0/OC01Mjc1LmpwZWc.jpeg',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 2',
        subTitle: 'Netsky, Maduk, Etherwood and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://elektrobeats.org/uploads/images/2022-05/28d846c68b71c1b83832687469b5eb9dbc_250.jpg',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 3',
        subTitle: 'Noisia, Koven, NGHTMRE and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://lastfm.freetls.fastly.net/i/u/ar0/02acedcb9d7abb6bf851e822fa53d725.jpg',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 5',
        subTitle: 'Bad Omens, Catch Your Breath, Our Last Night and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://i.scdn.co/image/ab67616d0000b2730f374035d274fd884ee522fb',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 6',
        subTitle: 'MiyaGi & Endspiel, MiyaGi, Grebz and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://yt3.googleusercontent.com/PV6uoW5mER2FhG_StgeQHQQ2kpn7G14vBJlcIMKFHNKF7eZwyxKkqqiyPE6MjwIuidIgOJwtLA=s900-c-k-c0x00ffffff-no-rj',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 7',
        subTitle: 'Anavae, Dead Sara, Alien Ant Farm and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://i.discogs.com/DwEqu87nYO9pnOkphaRbUnCleNbCZnoMs7Kyy_GCUa0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDI2/MDMtMTY3MzAxMTE0/OC01Mjc1LmpwZWc.jpeg',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 2',
        subTitle: 'Netsky, Maduk, Etherwood and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://elektrobeats.org/uploads/images/2022-05/28d846c68b71c1b83832687469b5eb9dbc_250.jpg',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 3',
        subTitle: 'Noisia, Koven, NGHTMRE and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://lastfm.freetls.fastly.net/i/u/ar0/02acedcb9d7abb6bf851e822fa53d725.jpg',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 5',
        subTitle: 'Bad Omens, Catch Your Breath, Our Last Night and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://i.scdn.co/image/ab67616d0000b2730f374035d274fd884ee522fb',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 6',
        subTitle: 'MiyaGi & Endspiel, MiyaGi, Grebz and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://yt3.googleusercontent.com/PV6uoW5mER2FhG_StgeQHQQ2kpn7G14vBJlcIMKFHNKF7eZwyxKkqqiyPE6MjwIuidIgOJwtLA=s900-c-k-c0x00ffffff-no-rj',
          type: 'square',
          style: 'curves',
        },
        title: 'Daily Mix 7',
        subTitle: 'Anavae, Dead Sara, Alien Ant Farm and more',
        color: randomColor(),
      },
    ],
  },
  {
    title: 'Your Top Mixes',
    items: [
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://img05.rl0.ru/afisha/e400x400p264x0f607x607q85i/s2.afisha.ru/mediastorage/58/29/8930ced492624000b617be502958.jpg',
          type: 'square',
          style: 'lines',
        },
        title: 'Chill Mix',
        subTitle: 'MiyaGi, Miyagi & Andry Panda, UFO Project and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://www.alexorg.biz/templates/yootheme/cache/grebz_small-e0725cbe.jpeg',
          type: 'square',
          style: 'lines',
        },
        title: '2010 Mix',
        subTitle: 'Rido, Грибы, Gorgon City and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://www.altpress.com/wp-content/uploads/2019/10/06/dream-state-1052x592.jpg?t=1689169341',
          type: 'square',
          style: 'lines',
        },
        title: 'Metal Mix',
        subTitle: 'Dream State, Imminence, We Came As Romance and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://trip2fest.ru/sites/default/files/persons/91a15f5dac304212b57b4c58d108feb0.jpg',
          type: 'square',
          style: 'lines',
        },
        title: '2000s Mix',
        subTitle: 'Spor, Korol i Shut, Sum 41 and more',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://lh3.googleusercontent.com/3LCXMJsx92wp_rGFA5Ma0tgysrxqonmg1gt-JEttN33wutnZ4EDZ_T72JSdLlOg4FaDrgoYMMecAJL0=w544-h544-p-l90-rj',
          type: 'square',
          style: 'lines',
        },
        title: 'Rock Mix',
        subTitle: 'Slot, While She Sleeps, The Pretty Reckless and more',
        color: randomColor(),
      },
    ],
  },
  {
    title: 'Your Favorite Artists',
    items: [
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://lastfm.freetls.fastly.net/i/u/ar0/02acedcb9d7abb6bf851e822fa53d725.jpg',
          type: 'circle',
        },
        title: 'Bad Omens',
        subTitle: 'Artist',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://yt3.googleusercontent.com/igJNFvY2jrfi19X6PCjWVs4liirfrmheAbqQRoLMYWDleS8HS3fbeUZLVSZoxnQ7VdV3TpBlsA=s900-c-k-c0x00ffffff-no-rj',
          type: 'circle',
        },
        title: 'Our Last Night',
        subTitle: 'Artist',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://i.scdn.co/image/ab6761610000e5eb8581bbea73df6ff1812ceb48',
          type: 'circle',
        },
        title: 'Korol i Shut',
        subTitle: 'Artist',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://www.altpress.com/wp-content/uploads/2023/05/07/attachment-2-1200x628-10.jpg',
          type: 'circle',
        },
        title: 'Sum 41',
        subTitle: 'Artist',
        color: randomColor(),
      },
      {
        id: crypto.randomUUID(),
        image: {
          src: 'https://i0.wp.com/theelectrichawk.com/wp-content/uploads/2022/04/Koven.jpg?resize=604%2C453&ssl=1',
          type: 'circle',
        },
        title: 'Koven',
        subTitle: 'Artist',
        color: randomColor(),
      },
    ],
  },
];

export type ImageType = 'square' | 'circle';
export type ImageStyle = 'lines' | 'curves' | undefined;

export type ISection = {
  title: string;
  items: Array<ISectionItem>;
};

export type ISectionItem = {
  id: string;
  title: string;
  subTitle?: string;
  color?: string;
  image?: {
    src: string;
    type: ImageType;
    style?: ImageStyle;
  };
};
