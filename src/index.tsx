import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import theme from './theme';
import Router from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AuthProvider from './auth';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	// <React.StrictMode>
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<AuthProvider>
			<RouterProvider router={Router} />
		</AuthProvider>
	</ThemeProvider>,
	// </React.StrictMode>,
);
