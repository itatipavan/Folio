// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// //   optimizeDeps: {
// //     exclude: ['lucide-react'],
// //   },
// // });

// export default defineConfig({
//   server: {
//     port: 3000,
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set your desired port here
  },
});