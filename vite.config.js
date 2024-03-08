import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr({ svgrOptions: { namedExport: 'default' } })],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
