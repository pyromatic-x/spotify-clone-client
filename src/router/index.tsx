import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from '../components/root';
import Error from '../pages/Error';
import { ROUTES } from './constants';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOME.PATH}
      element={<Root />}
      errorElement={
        <Root>
          <Error />
        </Root>
      }
    >
      {Object.keys(ROUTES).map((key: any) => (
        <Route path={ROUTES[key].PATH} element={ROUTES[key].ELEMENT} key={ROUTES[key].PAGE_TITLE} />
      ))}
    </Route>,
  ),
);
