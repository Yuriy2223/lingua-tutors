import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
    },
    base: './',
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': process.env,
//   },
//   server: {
//     host: true,
//   },
//   base: './',
//   build: {
//     rollupOptions: {
//       output: {
//         assetFileNames: (assetInfo) => {
//           if (assetInfo.name && assetInfo.name.endsWith('.ttf')) {
//             return 'fonts/[name][extname]'; // Додайте цю лінію для шрифтів
//           }
//           return assetInfo.name || '[name].[hash][extname]';
//         },
//       },
//     },
//   },
// });
