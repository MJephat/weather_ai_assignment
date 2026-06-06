// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     react(), 
//     tailwindcss()
//   ],
//   server: {
//     allowedHosts: true,
//     host: "0.0.0.0",
//     port: 3000,
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 1. Swapped to the correct plugin
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  plugins: [
    react(), // 2. Works perfectly with Tailwind v4 and React
    tailwindcss() 
  ],
  server: {
    allowedHosts: ['://onrender.com']
  }
})
