import Filters from '../components/root/header/extensions/filters';
import Browse from '../pages/Browse';
import Home from '../pages/home/Home';
import HomeMusic from '../pages/home/HomeMusic';
import HomePodcasts from '../pages/home/HomePodcasts';

export interface IRoute {
  readonly PATH: string;
  readonly PAGE_TITLE: string;
  readonly ELEMENT: React.ReactElement;
  readonly ROOT_HEADER_EXTENSION?: React.ReactElement;
}

export interface IRoutes {
  [index: string]: IRoute;
}

export const ROUTES: IRoutes = {
  HOME: {
    PATH: '/',
    PAGE_TITLE: 'Spotify - Home',
    ELEMENT: <Home />,
    ROOT_HEADER_EXTENSION: <Filters />,
  },
  HOME_MUSIC: {
    PATH: '/home/music',
    PAGE_TITLE: 'Spotify - Music',
    ELEMENT: <HomeMusic />,
    ROOT_HEADER_EXTENSION: <Filters />,
  },
  HOME_PODCASTS: {
    PATH: '/home/podcasts',
    PAGE_TITLE: 'Spotify - Podcasts',
    ELEMENT: <HomePodcasts />,
    ROOT_HEADER_EXTENSION: <Filters />,
  },
  SEARCH: {
    PATH: '/search',
    PAGE_TITLE: 'Spotify - Search',
    ELEMENT: <Browse />,
  },
};
