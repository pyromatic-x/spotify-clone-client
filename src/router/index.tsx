import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from '../pages/Error';
import App from '../App';
import Home from '../pages/home/Home';
import PlaylistPage from '../pages/playlist';
import AlbumPage from '../pages/album';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={
        <App>
          <Error />
        </App>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/playlist/:id" element={<PlaylistPage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
    </Route>,
  ),
);
