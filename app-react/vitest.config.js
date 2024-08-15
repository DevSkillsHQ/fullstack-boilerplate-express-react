import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['.config/vitest-setup.js'],
            exclude: ['node_modules', 'build', '.idea', '.git', '.cache'],
            reporters: ['basic'],
            poolOptions: {
                isolate: false,
                singleFork: true
            }
        }
    })
);
