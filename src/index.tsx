import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import theme from './theme';
import Router from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import NoMobileModal from './NoMobileMiddleware';
import AuthProvider from './components/root/auth';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NoMobileModal>
        <AuthProvider>
          <RouterProvider router={Router} />
        </AuthProvider>
      </NoMobileModal>
    </ThemeProvider>
  </React.StrictMode>,
);
