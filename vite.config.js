// vite.config.js
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
                cssnano(),
            ]
        },

        devSourcemap: true
    },

    plugins: [
        imagemin()
    ]

});