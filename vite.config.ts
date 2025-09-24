import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',   // ← 加这一行，其余不动
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
