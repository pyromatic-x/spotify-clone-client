import Filters from '../components/header/extensions/filters';
import Search from '../components/header/extensions/search';
import Browse from '../pages/Browse';
import Queue from '../pages/Queue';
import Home from '../pages/home/Home';
import HomeMusic from '../pages/home/HomeMusic';
import HomePodcasts from '../pages/home/HomePodcasts';

export interface IRoute {
  readonly PATH: string;
  readonly PAGE_TITLE: string;
  readonly ELEMENT: React.ReactElement;
  readonly HEADER_EXTENSION?: {
    ELEMENT: React.ReactElement;
    PLACEMENT: 'built-in' | 'outer';
  };
}

export interface IRoutes {
  [index: string]: IRoute;
}

export const ROUTES: IRoutes = {
  HOME: {
    PATH: '/',
    PAGE_TITLE: 'Spotify - Home',
    ELEMENT: <Home />,
    HEADER_EXTENSION: {
      ELEMENT: <Filters />,
      PLACEMENT: 'outer',
    },
  },
  HOME_MUSIC: {
    PATH: '/home/music',
    PAGE_TITLE: 'Spotify - Music',
    ELEMENT: <HomeMusic />,
    HEADER_EXTENSION: {
      ELEMENT: <Filters />,
      PLACEMENT: 'outer',
    },
  },
  HOME_PODCASTS: {
    PATH: '/home/podcasts',
    PAGE_TITLE: 'Spotify - Podcasts',
    ELEMENT: <HomePodcasts />,
    HEADER_EXTENSION: {
      ELEMENT: <Filters />,
      PLACEMENT: 'outer',
    },
  },
  SEARCH: {
    PATH: '/search',
    PAGE_TITLE: 'Spotify - Search',
    ELEMENT: <Browse />,
    HEADER_EXTENSION: {
      ELEMENT: <Search />,
      PLACEMENT: 'built-in',
    },
  },
  QUEUE: {
    PATH: '/queue',
    PAGE_TITLE: 'Spotify - Queue',
    ELEMENT: <Queue />,
  },
};
