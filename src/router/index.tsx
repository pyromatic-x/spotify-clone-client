import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from '../pages/Error';
import { ROUTES } from './constants';
import App from '../App';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES[0].PATH}
      element={<App />}
      errorElement={
        <App>
          <Error />
        </App>
      }
    >
      {ROUTES.map((route) => (
        <Route path={route.PATH} element={route.ELEMENT} key={route.KEY} />
      ))}
    </Route>,
  ),
);
