import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
// import eslint from 'vite-plugin-eslint2';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/

export default defineConfig(() => {
	return {
		base: '/',
		build: {
			sourcemap: true,
		},
		dev: {
			sourcemap: true,
		},
		server: {
			port: 3000,
			cors: false,
		},
		preview: {
			port: 9000,
		},
		plugins: [
			tsconfigPaths(),
			svgr(),
			TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
			react(),
			// eslint({ cache: false }),
			mkcert(),
			VitePWA({
				registerType: 'autoUpdate',
				devOptions: {
					enabled: true,
				},
			}),
		],
	};
});
