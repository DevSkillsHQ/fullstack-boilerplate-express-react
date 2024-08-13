import {defineConfig} from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: './build',
        target: ['es2020'],
        sourcemap: true,
    },
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    root: './'
});
