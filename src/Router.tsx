import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./components/root";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Error from "./pages/Error";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={
        <Root>
          <Error />
        </Root>
      }
    >
      <Route path="" element={<Home />} />
      <Route path="search" element={<Browse />} />
      <Route path="queue" element={<Queue />} />
    </Route>
  )
);
