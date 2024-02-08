import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import AuthMiddleware from "./AuthMiddleware";
import { RouterProvider } from "react-router-dom";

import theme from "./theme";
import Router from "./Router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NoMobileModal from "./NoMobileMiddleware";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NoMobileModal>
          <AuthMiddleware>
            <RouterProvider router={Router} />
          </AuthMiddleware>
        </NoMobileModal>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
