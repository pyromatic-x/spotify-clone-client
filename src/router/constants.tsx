import Home from '../pages/home/Home';

export interface IRoute {
  readonly KEY: string;
  readonly PATH: string;
  readonly PAGE_TITLE?: string;
  readonly ELEMENT: React.ReactElement;
}

export interface IRoutes extends Array<IRoute> {}

export const ROUTES: IRoutes = [{ KEY: 'HOME', PATH: '/', ELEMENT: <Home /> }];
