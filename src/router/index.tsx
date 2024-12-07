import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from '../components/root';
import Error from '../pages/Error';
import { ROUTES } from './constants';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES[0].PATH}
      element={<Root />}
      errorElement={
        <Root>
          <Error />
        </Root>
      }
    >
      {ROUTES.map((route) => (
        <Route path={route.PATH} element={route.ELEMENT} key={route.KEY} />
      ))}
    </Route>,
  ),
);
