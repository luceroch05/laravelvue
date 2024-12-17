import vue from '@vitejs/plugin-vue';
import path from 'path';

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    },
  },
  server: {
    proxy: {
      '/app': 'http://localhost',  // Asegúrate de ajustar si tienes una API o servidor backend
    },
  },
};
