import Home from '../pages/home/Home';

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
    PAGE_TITLE: 'Spotify',
    ELEMENT: <Home />,
  },
};
