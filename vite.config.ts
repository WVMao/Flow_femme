import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Flow_femme/', // Explicit base path for GitHub Pages
    server: {
        port: 5175,
        host: true
    }
})
